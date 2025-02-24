import Image from "next/image";
import Link from "next/link";
import styles from "./css/ServiceCard.module.css";

interface ServiceCardShortProps {
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
export default function ServiceCardShort({
  order,
  title,
  text,
  image,
  logo,
  link,
  period,
  logoWidth,
  logoHeight,
}: ServiceCardShortProps) {
  return (
    <Link
      href={link}
      className={`w-full h-full bg-cover bg-bottom md:bg-center bg-no-repeat inline-block flex flex-col-reverse md:flex-col justify-between ${styles.card}`}
      style={{
        backgroundImage: `url('${image}'), linear-gradient(180deg, #1E1E1E 0%, #373737 100%)`,
      }}
    >
      <div className="flex justify-between">
        <div
        className={styles.container}
        >
          <div
            className="font-semibold text-fluid opacity-50"
            style={{ lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))" }}
          >
            0{order}
          </div>
          <h4
            className={`font-semibold ${styles.short_card_title}`}
          >
            {title}
          </h4>
          <div
            className={`opacity-50 font-semibold text-fluid ${styles.text}`}
          >
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
        <div
          className={`inline-block ${styles.period}`}
        >
          {period}
        </div>
        <div
          className={`border rounded-full ${styles.btn} bg-white md:bg-transparent`}
        >
          <div>
            <Image
              src={"/icons/arrow-right-light.svg"}
              alt="arrow"
              width={0}
              height={0}
              className={`${styles.arrow} brightness-0 md:brightness-[1]`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
