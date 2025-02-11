import Title from "../common/title";
import s from "../common/css/amo/Cta.module.css";
import Button from "../common/button";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <div className={`px-fluid ${s.wrapper}`}>
      <div className={`${s.inner} block md:flex justify-between`}>
        <div className={s.innerMobile}>
          <div className={s.title}>
            <Title
              title="Продавайте с помощью"
              title2="специальных чат-ботов"
              subtitle="Встроенный телеграм-бот"
              icon="/icons/robot.svg"
            ></Title>
          </div>
          <Button
            text="Настроить чат-бота"
            withArrow={true}
            isFull={false}
            link="/"
          ></Button>
        </div>
        <div className="relative z-10 hidden md:block">
          <Link className={s.link} href={"/"}>
            КОНСТРУКТОР ЧАТ-БОТОВ
            <Image
            className={s.telegram}
              src={"/icons/telegram-grey.svg"}
              width={31}
              height={31}
              alt="telegram"
            ></Image>
          </Link>
        </div>
        <Image src={"/messanger.png"} unoptimized={true} className={`${s.messanger} hidden md:block`} width={383} height={338} alt="messanger"></Image>

        <Image src={"/sales-bot-mobile.png"} className={`${s.salesBot} block md:hidden`} width={628} height={269} alt="sales-bot"></Image>

        <Image src={"/sales-bot.png"} className={`${s.salesBot} hidden md:block`} width={628} height={269} alt="sales-bot"></Image>

        <Image src={"/Rectangle.png"} className={`${s.rectangle} hidden md:block`} width={915} height={379} alt="rectangle"></Image>
      </div>
    </div>
  );
}
