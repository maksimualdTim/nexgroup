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
      className={`w-full h-full bg-cover bg-center bg-no-repeat inline-block flex flex-col justify-between ${styles.card}`}
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <div className="flex justify-between items-center">
        <div
          className={`inline-block ${styles.period}`}
        >
          {period}
        </div>
        <div>
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
      <div className="flex justify-between items-end">
        <div
          style={{ maxWidth: "calc(488 * (1px + (100vw - 1530px) / 1530))" }}
        >
          <div
            className="font-semibold text-fluid opacity-50"
            style={{ lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))" }}
          >
            0{order}
          </div>
          <h4
            className={`font-semibold ${styles.long_card_title}`}
          >
            {title}
          </h4>
          <div
            className="opacity-50 font-semibold text-fluid"
            style={{ lineHeight: "calc(24 * (1px + (100vw - 1530px) / 1530))" }}
          >
            {text}
          </div>
        </div>
        <div
          className="bg-white rounded-full"
          style={{ padding: "calc(48 * (1px + (100vw - 1530px) / 1530))" }}
        >
          <div>
            <Image
              src={"/icons/arrow-right.svg"}
              alt="arrow"
              width={0}
              height={0}
              style={{
                width: "calc(13 * (1px + (100vw - 1530px) / 1530))",
                height: "calc(13 * (1px + (100vw - 1530px) / 1530))",
              }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
