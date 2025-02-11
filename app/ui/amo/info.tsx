import Image from "next/image";
import Title from "../common/title";
import s from "../common/css/amo/Info.module.css";
import MainText from "../common/mainText";

export default function Info() {
  return (
    <div className={`px-fluid ${s.wrapper}`}>
      <div className={`block md:flex justify-between items-end ${s.title}`}>
        <div className="mobile-container">
          <Title
            title="Получайте максимум"
            title2="от вашего отдела продаж"
            subtitle="Новые высоты"
          ></Title>
        </div>
        <div className="mobile-container">
          <MainText
            order={3}
            text={[
              <p key={1}>
                Улучшите эффективность работы, автоматизируйте процессы и
                упростите взаимодействие с клиентами вместе с amoCRM.
              </p>,
            ]}
          ></MainText>
        </div>
      </div>
      <div className={`${s.cards} mobile-container`}>
        <div className={s.card}>
          <Image alt="messages" src={"/messages.png"} width={700} height={304}></Image>
          <div className={s.period}>Беседы и чаты с вашими клиентами</div>
        </div>
        <div className={s.card}>
          <Image alt="messages" src={"/amo-graphic.png"} width={279} height={382}></Image>
          <div className={s.period}>Подробная статистика</div>
        </div>
        <div className={s.card}>
          <Image alt="messages" src={"/leads.png"} width={456} height={320}></Image>
          <div className={s.period}>Аналитика с учетом ваших товаров</div>
        </div>
      </div>
    </div>
  );
}
