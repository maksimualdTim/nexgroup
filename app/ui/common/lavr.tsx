import Image from "next/image";
import styles from "../common/css/Lavr.module.css";

export default function Lavr({ transparent = false }: { transparent?: boolean }) {
    return (
        <div className={styles.container} data-transparent={transparent}>
            <Image 
                src={transparent ? "/icons/lavr-left-transparent.svg" : "/icons/lavr-left.svg"} 
                alt="lavr" 
                width={87} 
                height={116} 
                className={styles.imageLeft} 
                data-transparent={transparent} 
            />
            <span className={styles.text}>Сертифицированный интегратор в Узбекистане</span>
            <Image 
                src={transparent ? "/icons/lavr-right-transparent.svg" : "/icons/lavr-right.svg"} 
                alt="lavr" 
                width={87} 
                height={116} 
                className={styles.imageRight} 
                data-transparent={transparent} 
            />
        </div>
    );
}