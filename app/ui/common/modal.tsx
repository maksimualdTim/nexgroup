"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import s from "../common/css/Modal.module.css";
import { createPortal } from "react-dom";
import formStyles from "../common/css/Input.module.css";
import { sendMessage } from "@/app/lib/actions";

const IntlTelInput = dynamic(() => import("intl-tel-input/reactWithUtils"), {
  ssr: false,
});
import "intl-tel-input/styles";
import Image from "next/image";
interface ModalProps {
  isOpen: boolean;
  subtitle?: string,
  product?: string,
  onClose: () => void;
}

export default function Modal({ isOpen, onClose, subtitle = "Бесплатный аудит", product = "" }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<number>(0);

  // const STATUS_DEFAULT = 0;
  const STATUS_SENDING = 1;
  const STATUS_SUCCESS = 2;
  const STATUS_ERROR = 3;

  useEffect(() => {
    setMounted(true); // Устанавливаем true только в браузере
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if(window.innerWidth > 767)
        document.body.style.paddingRight = "5px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);

  // Закрытие при нажатии на Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    formData.set("phone", phone)
    formData.set("form_page", window.location.href)
    formData.set("referer", window.location.href)
    setStatus(STATUS_SENDING);
    event.currentTarget.reset()
    const result = await sendMessage(formData);
    if (result?.error) {
        setStatus(STATUS_ERROR);
      } else {
        setStatus(STATUS_SUCCESS);
      }
    setPhone("");
    setName("");
  };

  if (!mounted) return null;

  return createPortal(
    <div className={`${isOpen ? s.active : ""}`} onClick={onClose}>
      <div className={s.modalOverlay}></div>
      <div
        className={`${s.modalContent} `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={s.imgBlock}>
            <Image src={"/modal.png"} width={391} height={539} alt="laptop" className={s.img}></Image>
        </div>
        <div className={s.form}>
        <div className={s.close} onClick={onClose}>
          <Image src={"/icons/close.svg"} alt="close" width={17} height={17}></Image>
        </div>
          <div className={s.subtitle}>{subtitle}</div>
          <h3 className={s.title}>Обсудим ваш проект?</h3>
          <form onSubmit={handleSubmit}>
            <div
              className={`${formStyles["input-container"]} ${
                name.length == 0 ? "" : formStyles.active
              }`}
            >
              <label
                className={`text-fluid ${formStyles.label}`}
                htmlFor="modalName"
              >
                Ваше имя*
              </label>
              <input
                name="name"
                id="modalName"
                type="text"
                value={name}
                onInput={(e) => setName(e.currentTarget.value)}
                required={true}
                className={`text-fluid ${formStyles.input}`}
              />
              <input type="hidden" name="product" id="modalProduct" value={product}/>
            </div>
            <div
              className={`${formStyles["input-container"]} ${
                phone.length == 0 ? "" : formStyles.active
              }`}
            >
              <IntlTelInput
                onChangeNumber={setPhone}
                inputProps={{
                  className: `text-fluid ${formStyles.input}`,
                  id: "modalPhone",
                  name: "phone",
                  required: true,
                }}
                initOptions={{
                  initialCountry: "uz",
                  strictMode: true,
                  nationalMode: true,
                  separateDialCode: true,
                  allowDropdown: false,
                  containerClass: formStyles.intlContainer,
                  countrySearch: false,
                  geoIpLookup: (success, failure) => {
                    fetch("https://ipapi.co/json")
                      .then((res) => res.json())
                      .then((data) => success(data.country_code))
                      .catch(() => failure());
                  },
                }}
              />
              <button className={s.button}>
                <span className={`${status == STATUS_SENDING ? "opacity-0" : ""}`}>Отправить</span>
                <span className={`${formStyles.spinner} ${s.spinner} ${status == STATUS_SENDING ? "" : "opacity-0"}`}></span>
                </button>
              <div className={s.policy}>
                Наш сайт защищен с помощью reCAPTCHA и соответствует Политике
                конфиденциальности и Условиям использования Google.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
