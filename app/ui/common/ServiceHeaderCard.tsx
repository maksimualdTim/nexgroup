import Link from "next/link";
import styles from "../common/css/ServiceHeaderCard.module.css";
import Image from "next/image";

export default function ServiceHeaderCard({link, iconWidth, iconHeight, text, title, logo, isSklad = false}: {link: string, iconWidth: number, iconHeight: number, text: string, title: string, logo: string, isSklad?: boolean}) {
    return (
        <Link href={link} className={styles.card}>
            <div className="flex justify-between items-center">
                <Image src={logo} alt="amo" width={0} height={0} style={{
                    width: `calc(${iconWidth} * (1px + (100vw - 1530px) / 1530))`,
                    height: `calc(${iconHeight} * (1px + (100vw - 1530px) / 1530))`
                }} className={`${!isSklad && "opacity-50"}`}></Image>
                <Image className={styles.icon} src={"/icons/arrow-diag.svg"} alt="arrow" width={20} height={20}></Image>
            </div>
            <div>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
            </div>
        </Link>
    )
}