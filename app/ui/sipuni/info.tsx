import Image from "next/image";
import Title from "../common/title";
import s from "../common/css/amo/Info.module.css";
import MainText from "../common/mainText";
import styles from "../common/css/sipuni/Info.module.css";

export default function Info() {
  return (
    <div className={`px-fluid ${s.wrapper}`}>
      <div className={`block md:flex justify-between items-end ${s.title}`}>
        <div className="mobile-container">
          <Title
            title="Гибкость и масштабируемость"
            title2="для&nbsp;эффективной работы"
            subtitle="Адаптация под задачи"
            isService={true}
          ></Title>
        </div>
        <div className="mobile-container">
          <MainText
            order={3}
            text={[
              <p key={1}>
                Мы настроим IP-телефонию под ваши задачи, обеспечим
                бесперебойную связь и организуем возможность масштабироваться
              </p>,
            ]}
          ></MainText>
        </div>
      </div>
      <div className={`${s.cards} ${styles.cards} mobile-container`}>
        <div className={`${s.card} ${styles.card}`}>
          <Image
            alt="calendar"
            src={"/sipuni-calendar.png"}
            width={696}
            height={309}
          ></Image>
          <div className={s.period}>Бизнес-аналитика по параметрам</div>
        </div>
        <div className={`${s.card} ${styles.card}`}>
          <Image
            alt="calls"
            src={"/sipuni-calls.png"}
            width={456}
            height={309}
          ></Image>
          <div className={s.period}>Полная история с записями звонков</div>
        </div>
        <div className={`${s.card} ${styles.card}`}>
          <Image
            alt="phone"
            src={"/sipuni-phone.png"}
            width={279}
            height={309}
          ></Image>
          <div className={s.period}>Звонки с любого устройства</div>
        </div>
      </div>
    </div>
  );
}
