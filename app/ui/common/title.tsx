import Image from "next/image";
import styles from "./css/Title.module.css";

export default function Title({
  title,
  subtitle,
  title2 = "",
  isMain = false,
  icon = "",
  iconLeft= true,
  isService = false
}: {
  title: string;
  subtitle: string;
  title2?: string;
  isMain?: boolean;
  icon?: string;
  iconLeft?: boolean,
  isService?: boolean
}) {
  let image = null;

  if (icon.length != 0) {
    image = (
      <Image
        src={icon}
        alt="logo"
        width={0}
        height={0}
        className={`${styles.icon} ${iconLeft ? "" : styles.iconRight}`}
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <div 
        data-aos={`${!isMain ? "fade-up" : ""}`}
        className={`subtitle text-fluid font-semibold ${styles.subtitle}`}
      >
        {iconLeft && image}
        <span
          className="opacity-50"
          style={{ lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))" }}
        >
          {subtitle}
        </span>
        {!iconLeft && image}
      </div>
      {isMain ? (
        <h1 className={`title leading-title font-bold text-title ${styles.title} ${styles.mainTitle} ${isService ? styles.serviceTitle : ""}`}>
          {title} <span className="inline opacity-50 md:block">{title2}</span>
        </h1>
      ) : (
        <h2 data-aos="fade-up" data-aos-delay="100" className={`title leading-title font-bold text-title ${styles.title} ${isService ? styles.serviceTitle : ""}`}>
          {title} <span className="inline opacity-50 md:block">{title2}</span>
        </h2>
      )}
    </div>
  );
}
