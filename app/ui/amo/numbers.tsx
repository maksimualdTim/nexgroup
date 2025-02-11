"use client";
import MainText from "../common/mainText";
import Title from "../common/title";
import s from "../common/css/amo/Numbers.module.css";
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
            title="Как внедрение amoCRM"
            title2="повлияет на ваш бизнес"
            subtitle="Ваш рост в цифрах"
          ></Title>
        </div>
        <div className="mobile-container">
          <MainText
            order={2}
            text={[
              <p key={1}>
                amoCRM повысит продажи, ускорит обработку заявок и улучшит
                обслуживание благодаря автоматизации и персонализации.{" "}
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
          className={s.flower}
          alt="flower"
        ></Image>
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.cardInfo}>
              <div className={s.cardNumber}>
                {inView ? <CountUp duration={4} end={30}></CountUp> : "30"}
              </div>
              <div className={s.cardText}>
                <div className={s.cardTop}>
                  <div className={s.cardSubtitle}>Продажи</div>
                  <div className={s.cardTitle}>Увеличение продаж от 30%</div>
                </div>
                <div className={s.cardPercent}>%</div>
              </div>
            </div>
            <div className={`${s.cardColumn} ${inView ? s.cardLow : ""}`}></div>
          </div>
          <div className={s.card}>
            <div className={s.cardInfo}>
              <div className={s.cardNumber}>
                {inView ? <CountUp duration={4} end={50}></CountUp> : "50"}{" "}
                <span className={`inline-block md:hidden ${s.cardPercent}`}>
                  %
                </span>{" "}
              </div>
              <div className={s.cardText}>
                <div className={s.cardTop}>
                  <div className={s.cardSubtitle}>Сделки</div>
                  <div className={s.cardTitle}>Сокращение упущенных сделок</div>
                </div>
                <div className={s.cardPercent}>%</div>
              </div>
            </div>
            <div className={`${s.cardColumn} ${inView ? s.cardMax : ""}`}></div>
          </div>
          <div className={s.card}>
            <div className={s.cardInfo}>
              <div className={s.cardNumber}>
                {inView ? <CountUp duration={4} end={40}></CountUp> : "40"}
              </div>
              <div className={s.cardText}>
                <div className={s.cardTop}>
                  <div className={s.cardSubtitle}>Обработка</div>
                  <div className={s.cardTitle}>Повышение продуктивности</div>
                </div>
                <div className={s.cardPercent}>%</div>
              </div>
            </div>
            <div
              className={`${s.cardColumn} ${inView ? s.cardMiddle : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
