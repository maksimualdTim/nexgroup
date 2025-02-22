'use client';

import Image from "next/image";
import styles from "../common/css/Button.module.css";
import formStyles from "../common/css/Input.module.css";
import Link from "next/link";
import { useState } from "react";
import { sendToTelegram } from "@/app/lib/actions";

export default function FooterForm({text = "Отправить"} : {text?: string}) {
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);


  const handleSubmit = async (formData: FormData) => {
    setStatus("Отправка...");
    const result = await sendToTelegram(formData);
    if (result?.error) {
      setStatus(`❌ Ошибка: ${result.error}`);
  } else {
      setStatus("✅ Успешно отправлено!");
  }
  }

  return (
    <form action={handleSubmit} className={formStyles.form}>
      <div className={`${formStyles["input-container"]} ${name.length == 0 ? "": formStyles.active}`}>
        <label className={`text-fluid ${formStyles.label}`} htmlFor="name">
          Ваше имя*
        </label>
        <input
          name="name"
          id="name"
          type="text"
          value={name}
          onInput={(e) => setName(e.currentTarget.value.trim())}
          required={true}
          className={`text-fluid ${formStyles.input}`}
        />
      </div>
      <div className={`${formStyles["input-container"]} ${phone.length == 0 ? "": formStyles.active}`}>
        <label className={`text-fluid ${formStyles.label}`} htmlFor="phone">
          Номер телефона*
        </label>
        <input
          id="phone"
          name="phone"
          value={phone}
          onInput={(e) => setPhone(e.currentTarget.value.trim())}
          type="text"
          required={true}
          className={`text-fluid ${formStyles.input}`}
        />
      </div>
      <div className={`${formStyles["input-container"]} ${comment.length == 0 ? "": formStyles.active}`}>
        <label className={`text-fluid ${formStyles.label}`} htmlFor="comment">
          Комментарий
        </label>
        <textarea
          name="comment"
          value={comment}
          onInput={(e) => setComment(e.currentTarget.value.trim())}
          id="comment"
          className={`text-fluid ${formStyles.textarea}`}
        ></textarea>
      </div>
      <button
        className={`bg-white inline-block text-[#0E0E0E] text-fluid font-semibold ${styles.button}`}
        style={{
            marginTop: "calc(56 * (1px + (100vw - 1530px) / 1530))",
            marginBottom: "calc(70 * (1px + (100vw - 1530px) / 1530))"
        }}
      >
        {text}{" "}
        <Image
          src={"/icons/arrow-right-btn.svg"}
          alt="arrow"
          width={0}
          height={0}
          className={`inline ${styles.icon}`}
        />
      </button>
      <div
        className={`text-[#666666] font-semibold ${formStyles.google}`}
      >
        Наш сайт защищен с помощью reCAPTCHA и соответствует 
        <Link target="_blank" href={"https://policies.google.com/privacy"}>Политике конфиденциальности</Link> и <Link target="_blank" href={"https://policies.google.com/terms;%20target="}>Условиям
        использования</Link> Google.
      </div>
      {status && <p className="mt-4 text-center">{status}</p>}
    </form>
  );
}
