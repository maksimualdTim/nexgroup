import Image from "next/image";
import s from "../common/css/web/PortfolioCard.module.css";
import Link from "next/link";

export default function Card({
  link,
  img,
  title,
  description,
  tags,
}: {
  link: string;
  img: string;
  title: string;
  description: string;
  tags: Array<string>;
}) {
  return (
    <Link href={link} className={s.card}>
      <div className={s.img}>
        <Image
          src={img}
          alt="portfolio preview"
          width={709}
          height={338}
        ></Image>
      </div>
      <div className={s.inner}>
        <div className={s.content}>
          <div className={s.title}>{title}</div>
          <div className={s.description}>{description}</div>
          <div className={s.tags}>
            {tags.map((tag, index) => (
              <span className={s.tag} key={index}><span>{tag}</span></span>
            ))}
          </div>
        </div>
        <div
          className={`rounded-full ${s.btn}`}
        >
          <div>
            <Image
              src={"/icons/arrow-right-light.svg"}
              alt="arrow"
              width={0}
              height={0}
              className={s.arrow}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
