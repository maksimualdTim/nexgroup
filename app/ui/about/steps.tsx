import Image from "next/image";
import Title from "../common/title";
import s from "../common/css/about/Steps.module.css";
import MainText from "../common/mainText";

export default function Steps() {
  return (
    <div className={`px-fluid ${s.wrapper}`}>
      <div className="flex justify-between items-center mobile-container">
        <div>
          <Title
            title="Внедряем IT-сервисы"
            title2="и&nbsp;оптимизируем рутину"
            subtitle="Цифровая трансформация"
          ></Title>
          <div className={`text-accent ${s.text}`}>Этапы ведения работ</div>
        </div>
        <div className="hidden md:block">
          <Image
            className={s.logo}
            src={"/icons/about-nex.svg"}
            width={116}
            height={67}
            alt="logo"
          ></Image>
        </div>
      </div>
      <div className={s.graphic}>
        <div className={s.row}>
          <div className={s.card} style={{ paddingLeft: "0" }}>
            <div className={s.cardTop}>
              <div data-aos="fade-up" className={s.cardTitle}>Анализ</div>
              <div data-aos="fade-up" data-aos-delay="200" className={s.order}>01</div>
            </div>
            <div className={s.cardText}>
              <MainText
                text={[
                  <p key={1}>
                    Анализируем бизнес-процессы, обсуждаем цели и выстраиваем
                    стратегию их оптимизации с учетом ваших планов.
                  </p>,
                ]}
                order={1}
              ></MainText>
            </div>
          </div>
          <div className={s.card}></div>
          <div
            className={s.card}
            style={{
              borderRight: "none",
            }}
          >
            <div className={s.cardTop}>
              <div data-aos="fade-up" className={s.cardTitle}>Оптимизация</div>
              <div data-aos="fade-up" data-aos-delay="200" className={s.order}>03</div>
            </div>
            <div className={s.cardText}>
              <MainText
                text={[
                  <p key={1}>
                    После реализации проекта мы продолжаем поддерживать вас,
                    оптимизируя решения для долгосрочной эффективности.
                  </p>,
                ]}
                order={3}
              ></MainText>
            </div>
          </div>
        </div>
        <div className={s.row}>
          <div className={s.card} style={{ borderRight: "none" }}></div>
          <div className={s.card}>
            <div className={s.cardTop}>
              <div data-aos="fade-up" className={s.cardTitle}>Внедрение</div>
              <div data-aos="fade-up" data-aos-delay="200" className={s.order}>02</div>
            </div>
            <div className={s.cardText}>
              <MainText
                text={[
                  <p key={1}>
                    Разрабатываем и внедряем решения, включая веб-разработку и
                    автоматизацию, с контролем качества на всех этапах.
                  </p>,
                ]}
                order={2}
              ></MainText>
            </div>
          </div>
          <div
            className={s.card}
            style={{
              borderRight: "none",
            }}
          ></div>
        </div>
      </div>
      <div className={`${s.graphicMobile} mobile-container`}>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.cardTitle}>Анализ</div>
            <div className={s.order}>01</div>
          </div>
          <div className={s.cardText}>
            <MainText
              text={[
                <p key={1}>
                    Анализируем бизнес-процессы, обсуждаем цели и выстраиваем
                    стратегию их оптимизации с учетом ваших планов.
                </p>,
              ]}
              order={1}
            ></MainText>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.cardTitle}>Внедрение</div>
            <div className={s.order}>02</div>
          </div>
          <div className={s.cardText}>
            <MainText
              text={[
                <p key={1}>
                  Разрабатываем и внедряем решения, включая веб-разработку и
                  автоматизацию, с контролем качества на всех этапах.
                </p>,
              ]}
              order={2}
            ></MainText>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.cardTop}>
            <div className={s.cardTitle}>Оптимизация</div>
            <div className={s.order}>03</div>
          </div>
          <div className={s.cardText}>
            <MainText
              text={[
                <p key={1}>
                    После реализации проекта мы продолжаем поддерживать вас,
                    оптимизируя решения для долгосрочной эффективности.
                </p>,
              ]}
              order={3}
            ></MainText>
          </div>
        </div>
      </div>
    </div>
  );
}
