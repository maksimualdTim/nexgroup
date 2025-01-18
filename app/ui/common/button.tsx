import Link from "next/link";
import Image from "next/image";
import styles from "../common/css/Button.module.css";

export default function Button({link, isFull, text, withArrow = false}: {link: string, isFull: boolean, text: string, withArrow?: boolean}) {
    if(isFull) {
        return (
            <Link href={link} className={`bg-white inline-block text-[#0E0E0E] text-fluid font-semibold ${styles.button}`}>
                {text}
                {withArrow && (
                    <Image src={"/icons/arrow-right-btn.svg"} alt="arrow" width={0} height={0} className={`inline ${styles.icon}`}/>
                )} 
            </Link>
        )
    }

    return (
        <Link href={link} className={`border inline-block font-semibold text-fluid ${styles.button}`} style={{
            borderColor: "#404040",
        }}>{text}</Link>
    )
}