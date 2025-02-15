import Title from "../common/title";
import s from "../common/css/amo/Cta.module.css";
import Button from "../common/button";
import Image from "next/image";
import styles from "../common/css/sipuni/Cta.module.css";

export default function CTA() {
  return (
    <div className={`px-fluid ${s.wrapper}`}>
      <div className={`${s.inner} relative`}>
        <div className={s.innerMobile}>
          <div className={s.title}>
            <Title
              title="Абсолютный контроль"
              title2="вашего колл-центра"
              subtitle="Управление всеми звонками"
              icon="/icons/phone.svg"
              isService={true}
            ></Title>
          </div>
          <Button
            text="Установить IP-телефонию"
            withArrow={true}
            isFull={false}
            link="https://t.me/nexgroup_support"
          ></Button>
        </div>
        <div className="absolute z-10 right-0 top-0 hidden md:block" style={{
          right: "calc(54 * (1px + (100vw - 1530px) / 1530))"
        }}>
            <Image src={"/sipuni-mockup.png"} alt="sipuni mobile" width={846} height={379} className={styles.img}></Image>
        </div>
        <div className="block md:hidden">
          <Image src={"/sipuni-mockup-mobile.png"} alt="sipuni mobile" width={846} height={379} className={styles.img}></Image>
        </div>
      </div>
    </div>
  );
}
