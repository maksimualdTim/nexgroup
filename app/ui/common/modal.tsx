"use client";

import { useEffect, useState } from "react";
import s from "../common/css/Modal.module.css";
import { createPortal } from "react-dom";
import formStyles from "../common/css/Input.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  // children: ReactNode;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    setMounted(true); // Устанавливаем true только в браузере
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
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

  const handleSubmit = () => {

  }

  if (!mounted) return null;

  return createPortal(
    <div className={`${isOpen ? s.active : ""}`} onClick={onClose}>
        <div className={s.modalOverlay}></div>
      <div
        className={`${s.modalContent} `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={s.imgBlock}></div>
        <div className={s.form}>
          <div className={s.subtitle}>Форма для связи</div>
          <h3 className={s.title}>Обсудим ваш проект?</h3>
          <form action={handleSubmit}>
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
                onInput={(e) => setName(e.currentTarget.value.trim())}
                required={true}
                className={`text-fluid ${formStyles.input}`}
              />
            </div>
            <div
              className={`${formStyles["input-container"]} ${
                phone.length == 0 ? "" : formStyles.active
              }`}
            >
              <label
                className={`text-fluid ${formStyles.label}`}
                htmlFor="modalPhone"
              >
                Номер телефона*
              </label>
              <input
                id="modalPhone"
                name="phone"
                value={phone}
                onInput={(e) => setPhone(e.currentTarget.value.trim())}
                type="text"
                required={true}
                className={`text-fluid ${formStyles.input}`}
              />
              <button className={s.button}>Отправить</button>
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
