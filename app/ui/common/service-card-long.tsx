import Image from "next/image";
import Link from "next/link";
import styles from "./css/ServiceCard.module.css";

interface ServiceCardLongProps {
  order: number;
  title: string;
  text: string;
  image: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  link: string;
  period: string;
}
export default function ServiceCardLong({
  order,
  title,
  text,
  image,
  logo,
  link,
  period,
  logoWidth,
  logoHeight,
}: ServiceCardLongProps) {
  return (
    <Link
      href={link}
      className={`w-full h-full bg-cover bg-center bg-no-repeat inline-block flex flex-col-reverse md:flex-col justify-between ${styles.card}`}
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <div className="flex justify-between items-center">
        <div className={`hidden md:inline-block ${styles.period}`}>
          {period}
        </div>
        <div className={`${styles.container} block md:hidden`}>
          <div
            className="font-semibold text-fluid opacity-50"
            style={{ lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))" }}
          >
            0{order}
          </div>
          <h4 className={`font-semibold ${styles.short_card_title}`}>
            {title}
          </h4>
          <div className={`opacity-50 font-semibold text-fluid ${styles.text}`}>
            {text}
          </div>
        </div>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="logo"
            width={0}
            height={0}
            style={{
              width: `calc(${logoWidth} * (1px + (100vw - 1530px) / 1530))`,
              height: `calc(${logoHeight} * (1px + (100vw - 1530px) / 1530))`,
            }}
          />
        </div>
      </div>
      <div className="flex justify-between items-start md:items-end">
        <div className={`inline-block md:hidden ${styles.period}`}>
          {period}
        </div>
        <div className={`${styles.containerLong} hidden md:block`}>
          <div
            className="font-semibold text-fluid opacity-50"
            style={{ lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))" }}
          >
            0{order}
          </div>
          <h4 className={`font-semibold ${styles.long_card_title}`}>{title}</h4>
          <div
            className={`opacity-50 font-semibold text-fluid ${styles.text}`}
            style={{ lineHeight: "calc(24 * (1px + (100vw - 1530px) / 1530))" }}
          >
            {text}
          </div>
        </div>
        <div className={`bg-white rounded-full ${styles.btn}`}>
          <div>
            <Image
              src={"/icons/arrow-right.svg"}
              alt="arrow"
              width={0}
              height={0}
              className={styles.arrow}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
