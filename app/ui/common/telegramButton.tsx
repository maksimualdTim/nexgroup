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
      className={`border inline-block font-semibold text-fluid relative ${styles.button}`}
      style={{
        borderColor: "#404040",
        paddingLeft: "calc(65 * (1px + (100vw - 1530px) / 1530))"
      }}
    >
      <Image
      className="inline-block absolute"
        alt="telegram"
        src={"/icons/telegram.svg"}
        width={26}
        height={26}
        style={{
          width: "calc(26 * (1px + (100vw - 1530px) / 1530))",
          height: "calc(26 * (1px + (100vw - 1530px) / 1530))",
          marginRight: "calc(10 * (1px + (100vw - 1530px) / 1530))",
          top: "50%",
          transform: "translateY(-50%)",
          left: "calc(25 * (1px + (100vw - 1530px) / 1530))"
        }}
      />{" "}
      {text}
    </Link>
  );
}
