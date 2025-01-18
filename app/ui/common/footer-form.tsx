import Image from "next/image";
import styles from "../common/css/Button.module.css";
import formStyles from "../common/css/Input.module.css";
import Link from "next/link";

export default function FooterForm() {
  return (
    <form action="">
      <div className={formStyles["input-container"]}>
        <label className={`text-fluid ${formStyles.label}`} htmlFor="name">
          Ваше имя*
        </label>
        <input
          id="name"
          type="text"
          required={true}
          className={`text-fluid ${formStyles.input}`}
        />
      </div>
      <div className={formStyles["input-container"]}>
        <label className={`text-fluid ${formStyles.label}`} htmlFor="phone">
          Номер телефона*
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          required={true}
          className={`text-fluid ${formStyles.input}`}
        />
      </div>
      <div className={formStyles["input-container"]}>
        <label className={`text-fluid ${formStyles.label}`} htmlFor="comment">
          Комментарий
        </label>
        <textarea
          name="comment"
          id="comment"
          className={`text-fluid ${formStyles.textarea}`}
          style={{
            height: "calc(76 * (1px + (100vw - 1530px) / 1530))",
          }}
        ></textarea>
      </div>
      <button
        className={`bg-white inline-block text-[#0E0E0E] text-fluid font-semibold ${styles.button}`}
        style={{
            marginTop: "calc(56 * (1px + (100vw - 1530px) / 1530))",
            marginBottom: "calc(70 * (1px + (100vw - 1530px) / 1530))"
        }}
      >
        Отправить{" "}
        <Image
          src={"/icons/arrow-right-btn.svg"}
          alt="arrow"
          width={0}
          height={0}
          className={`inline ${styles.icon}`}
        />
      </button>
      <div
        className="text-[#666666] font-semibold"
        style={{
          fontSize: "calc(14 * (1px + (100vw - 1530px) / 1530))",
          lineHeight: "calc(17 * (1px + (100vw - 1530px) / 1530))",
        }}
      >
        Наш сайт защищен с помощью reCAPTCHA и соответствует 
        <Link target="_blank" href={"https://policies.google.com/privacy"}>Политике конфиденциальности</Link> и <Link target="_blank" href={"https://policies.google.com/terms;%20target="}>Условиям
        использования</Link> Google.
      </div>
    </form>
  );
}
