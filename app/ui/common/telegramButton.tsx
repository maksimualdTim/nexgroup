import Link from "next/link";
import styles from "../common/css/Button.module.css";
import Image from "next/image";

export default function TelegramButton({
  link,
  text,
}: {
  link: string;
  text: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`border inline-block font-semibold text-fluid relative ${styles.button} ${styles.telegramButton}`}
    >
      <Image
      className={`inline-block absolute ${styles.telegramIcon}`}
        alt="telegram"
        src={"/icons/telegram.svg"}
        width={26}
        height={26}
      />{" "}
      {text}
    </Link>
  );
}
