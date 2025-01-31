import Image from "next/image";
import styles from "./css/Title.module.css";

export default function Title({
  title,
  subtitle,
  title2 = "",
  isMain = false,
  icon = "",
  iconLeft= true
}: {
  title: string;
  subtitle: string;
  title2?: string;
  isMain?: boolean;
  icon?: string;
  iconLeft?: boolean
}) {
  let image = null;

  if (icon.length != 0) {
    image = (
      <Image
        src={icon}
        alt="logo"
        width={0}
        height={0}
        className={styles.icon}
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <div
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
        <h1 className={`title leading-title font-bold text-title ${styles.title}`}>
          {title} <span className="inline opacity-50 md:block">{title2}</span>
        </h1>
      ) : (
        <h3 className={`title leading-title font-bold text-title ${styles.title}`}>
          {title} <span className="inline opacity-50 md:block">{title2}</span>
        </h3>
      )}
    </div>
  );
}
