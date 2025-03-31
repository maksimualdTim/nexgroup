"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "../common/css/Button.module.css";
import formStyles from "../common/css/Input.module.css";
import Link from "next/link";
import { useState } from "react";
import { sendMessage } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

const IntlTelInput = dynamic(() => import("intl-tel-input/reactWithUtils"), {
  ssr: false,
});
import "intl-tel-input/styles";

export default function FooterForm({ text = "Отправить" }: { text?: string }) {
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [status, setStatus] = useState<number>(0);
  const router = useRouter();

  // const STATUS_DEFAULT = 0;
  const STATUS_SENDING = 1;
  const STATUS_SUCCESS = 2;
  const STATUS_ERROR = 3;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
    const formData = new FormData(event.currentTarget);
    formData.set("phone", phone)
    formData.set("form_page", window.location.href)
    formData.set("referer", window.location.href)
    event.currentTarget.reset()
    setStatus(STATUS_SENDING);
    const result = await sendMessage(formData);
    if (result?.error) {
      setStatus(STATUS_ERROR);
    } else {
      setStatus(STATUS_SUCCESS);
    }
    setPhone("");
    setName("");
    setComment("");
    router.push("/success");
  };

  return (
    <form onSubmit={handleSubmit} className={formStyles.form}>
      <div
        className={`${formStyles["input-container"]} ${
          name.length == 0 ? "" : formStyles.active
        }`}
      >
        <label className={`text-fluid ${formStyles.label}`} htmlFor="name">
          Ваше имя*
        </label>
        <input
          name="name"
          id="name"
          type="text"
          value={name}
          onInput={(e) => setName(e.currentTarget.value)}
          required={true}
          className={`text-fluid ${formStyles.input}`}
        />
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
            id: "phone",
            name: "phone",
            required: true,
          }}
          initOptions={{
            initialCountry: "uz",
            strictMode: true,
            nationalMode: false,
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
      </div>
      <div
        className={`${formStyles["input-container"]} ${
          comment.length == 0 ? "" : formStyles.active
        }`}
      >
        <label className={`text-fluid ${formStyles.label}`} htmlFor="comment">
          Комментарий
        </label>
        <textarea
          name="comment"
          value={comment}
          onInput={(e) => setComment(e.currentTarget.value)}
          id="comment"
          className={`text-fluid ${formStyles.textarea}`}
        ></textarea>
      </div>
      <button
        className={`bg-white inline-block text-[#0E0E0E] text-fluid font-semibold ${styles.button}`}
        style={{
          marginTop: "calc(56 * (1px + (100vw - 1530px) / 1530))",
          marginBottom: "calc(70 * (1px + (100vw - 1530px) / 1530))",
        }}
      >

        <div className={`${status == STATUS_SENDING ? "opacity-0" : ""}`}>
          {text}{" "}
          <Image
            src="/icons/arrow-right-btn.svg"
            alt="arrow"
            width={0}
            height={0}
            className={`inline ${styles.icon}`}
          />
        </div>
        <span className={`${formStyles.spinner} ${status == STATUS_SENDING ? "" : "opacity-0"}`}></span>
      </button>
      <div className={`text-[#666666] font-semibold ${formStyles.google}`}>
        Наш сайт защищен с помощью reCAPTCHA и соответствует 
        <Link target="_blank" href={"https://policies.google.com/privacy"}>
          Политике конфиденциальности
        </Link>
         и 
        <Link
          target="_blank"
          href={"https://policies.google.com/terms;%20target="}
        >
          Условиям использования
        </Link>
         Google.
      </div>
    </form>
  );
}
