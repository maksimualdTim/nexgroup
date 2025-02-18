import Image from "next/image";
import s from "../common/css/web/ServiceCard.module.css";

export default function Card({
  price,
  title,
  subtitle,
  text,
  period,
  img,
}: {
  price: string;
  title: string;
  subtitle: string;
  text: string;
  period: string;
  img: string;
}) {
  return (
    <div className={s.card}>
      <div className={s.info}>
        <div className={`${s.period} hidden md:inline-block`}>{period}</div>
        <div className={s.title}>{title}</div>
        <div className={s.subtitle}>{subtitle}</div>
        <div className={s.text}>{text}</div>
        <div className={s.priceBlock}>
          <span className="opacity-50">от</span>{" "}
          <span className={s.price}>{price}</span>{" "}
          <span className={s.currency}>сум</span>
        </div>
      </div>
      <div className={s.imgBlock}>
        <Image
          src={img}
          alt="service"
          className={s.img}
          width={379}
          height={398}
        ></Image>
      </div>
      <div className="flex items-end justify-between">
        <div
          className={`bg-white rounded-full ${s.btn} relative z-10 md:absolute`}
        >
          <div style={{
            height: "100%"
          }}>
            <Image
              src={"/icons/arrow-right.svg"}
              alt="arrow"
              width={0}
              height={0}
              className={s.arrow}
            />
          </div>
        </div>
        <div className={`${s.period} inline-block md:hidden`}>{period}</div>
      </div>
    </div>
  );
}
