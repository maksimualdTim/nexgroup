import Image from "next/image";
import s from "../common/css/about/Card.module.css";

export default function Card({
  icon,
  title,
  text,
  textMobile = "",
}: {
  icon: string;
  title: string;
  text: string;
  textMobile?: string;
}) {
  return (
    <div className={`${s.card}`}>
      <div
        className="flex justify-between items-center"
        style={{
          marginBottom: "calc(40 * (1px + (100vw - 1530px) / 1530))",
        }}
      >
        <div>
          <Image
            src={icon}
            width={0}
            alt="users"
            height={0}
            className={s.icon}
          />
        </div>
      </div>
      <div className={s.textWrapper}>
        <div className={s.title}>{title}</div>
        <div className={s.text}>
          <div className="hidden md:block">{text}</div>{" "}
          <div className="md:hidden block">
            {textMobile.length === 0 ? text : textMobile}
          </div>
        </div>
      </div>
    </div>
  );
}
