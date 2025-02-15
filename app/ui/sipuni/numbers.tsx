"use client";
import MainText from "../common/mainText";
import Title from "../common/title";
import s from "../common/css/amo/Numbers.module.css";
import styles from "../common/css/sipuni/Number.module.css";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";

export default function NumbersAmo() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается один раз
    threshold: 0.65, // Процент видимой области
  });
  return (
    <div ref={ref} className={`px-fluid ${s.wrapper}`}>
      <div className={`block md:flex justify-between items-end ${s.title}`}>
        <div className="mobile-container">
          <Title
            isService={true}
            title={"Как внедрение\nIP-телефонии"}
            title2={"\nповлияет на ваш бизнес"}
            subtitle="Правильный колл-центр"
          ></Title>
        </div>
        <div className="mobile-container">
          <MainText
            order={2}
            text={[
              <p key={1}>
                IP-телефония повысит эффективность коммуникации, улучшит
                обслуживание клиентов и оптимизирует работу сотрудников.
              </p>,
            ]}
          ></MainText>
        </div>
      </div>
      <div className="relative mobile-container">
        <Image
          src={"/icons/flower.svg"}
          width={56}
          height={56}
          className={`${s.flower} ${styles.flower}`}
          alt="flower"
        ></Image>
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.cardInfo}>
              <div className={s.cardNumber}>
                {inView ? <CountUp duration={4} end={60}></CountUp> : "60"}
              </div>
              <div className={s.cardText}>
                <div className={s.cardTop}>
                  <div className={s.cardSubtitle}>Звонки</div>
                  <div className={s.cardTitle}>Сокращение пропущенных</div>
                </div>
                <div className={s.cardPercent}>%</div>
              </div>
            </div>
            <div className={`${s.cardColumn} ${inView ? s.cardMax : ""}`}></div>
          </div>
          <div className={s.card}>
            <div className={s.cardInfo}>
              <div className={s.cardNumber}>
                {inView ? <CountUp duration={4} end={40}></CountUp> : "40"}{" "}
                <span className={`inline-block md:hidden ${s.cardPercent}`}>
                  %
                </span>{" "}
              </div>
              <div className={s.cardText}>
                <div className={s.cardTop}>
                  <div className={s.cardSubtitle}>КПД</div>
                  <div className={`${s.cardTitle} hidden md:block`}>Повышение продуктивности</div>
                  <div className={`${s.cardTitle} block md:hidden break-words`}>Повышение продук-тивности</div>
                </div>
                <div className={s.cardPercent}>%</div>
              </div>
            </div>
            <div className={`${s.cardColumn} ${inView ? s.cardMiddle : ""}`}></div>
          </div>
          <div className={s.card}>
            <div className={s.cardInfo}>
              <div className={s.cardNumber}>
                {inView ? <CountUp duration={4} end={30}></CountUp> : "30"}
              </div>
              <div className={s.cardText}>
                <div className={s.cardTop}>
                  <div className={s.cardSubtitle}>Продажи</div>
                  <div className={s.cardTitle}>Увеличение продаж</div>
                </div>
                <div className={s.cardPercent}>%</div>
              </div>
            </div>
            <div
              className={`${s.cardColumn} ${inView ? s.cardLow : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
