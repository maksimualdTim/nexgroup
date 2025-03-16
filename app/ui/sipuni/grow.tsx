import Image from "next/image";
import s from "../common/css/amo/Grow.module.css";
import Title from "../common/title";
import styles from "../common/css/sipuni/Grow.module.css";

export default function Grow() {
  return (
    <div className={`${s.wrapper} px-fluid`} id="grow">
      <div
        className={`flex justify-between items-end mobile-container ${s.title}`}
      >
        <div>
          <Title
            title="Связь без границ"
            title2="с&nbsp;корпоративной телефонией"
            subtitle="Всегда на связи с клиентом"
            isService={true}
          ></Title>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="flex items-center hidden md:flex">
          <div className={s.text}>
            Идеальное решение для бизнеса любого масштаба
          </div>
          <Image
            src={"/icons/customer.svg"}
            width={24}
            height={24}
            className={s.cloud}
            alt="cloud"
          ></Image>
        </div>
      </div>
      <div className={`flex flex-wrap hidden md:flex ${s.cards}`}>
        <div data-aos="fade-up" className={`${s.card} ${s.cardLongTop} ${s.cardLong}`}>
          <div>
            <Image
              src={"/sipuni-analytics.png"}
              alt="sipuni"
              width={835}
              height={301}
              className={s.cardImage}
            ></Image>
          </div>
          <div className={s.cardContent}>
            <div className={s.cardTitle}>Аналитика и отчеты по звонкам</div>
            <div className={s.cardSubtitle}>Подробная статистика</div>
            <div className={s.cardText}>
              Детализированная аналитика и отчеты по звонкам помогут отслеживать
              эффективность, анализировать работу операторов и оптимизировать
              процессы в колл-центре.
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className={`${s.card} ${s.cardShortTop} ${s.cardShort}`}>
          <div className={s.cardContent}>
            <div className={s.cardTitle}>Журналы звонков</div>
            <div className={s.cardSubtitle}>Контроль пропущенных</div>
            <div className={s.cardText}>
              Журнал звонков с фиксированием всех вызовов и удобным контролем
              пропущенных, чтобы ни один клиент не остался без ответа.
            </div>
          </div>
          <div
            className="relative"
            style={{
              top: "calc(2* (1px + (100vw - 1530px) / 1530))",
            }}
          >
            <Image
              src={"/sipuni-screen.png"}
              alt="sipuni"
              width={611}
              height={315}
              className={s.cardImage}
            ></Image>
          </div>
        </div>
        <div data-aos="fade-up" className={`${s.card} ${s.cardShortBot} ${s.cardShort}`}>
          <div>
            <Image
              src={"/sipuni-records.png"}
              alt="sipuni"
              width={611}
              height={315}
              className={s.cardImage}
            ></Image>
          </div>
          <div className={s.cardContent}>
            <div className={s.cardTitle}>Запись всех разговоров</div>
            <div className={s.cardSubtitle}>
              Прослушивайте звонки менеджеров
            </div>
            <div className={s.cardText}>
              Запись разговоров для контроля качества, обучения сотрудников и
              повышения уровня обслуживания клиентов.
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className={`${s.card} ${s.cardLongBot} ${s.cardLong}`}>
          <div className={s.cardContent}>
            <div className={s.cardTitle}>Интеграция с CRM-системами</div>
            <div className={s.cardSubtitle}>Настройка интеграций</div>
            <div className={s.cardText}>
              Бесшовная интеграция с CRM для автоматизации работы, хранения
              истории звонков и улучшения взаимодействия с клиентами.
            </div>
          </div>
          <div>
            <Image
              src={"/sipuni-integrations.png"}
              alt="sipuni integrations"
              width={835}
              height={190}
              className={s.cardImage}
            ></Image>
          </div>
        </div>
      </div>
      <div className={`${s.mobileCards} block md:hidden`}>
        <div className={`${s.mobileCard} ${styles.mobileCard}`}>
          <div className={s.mobileContent}>
            <div className={s.mobileCardTitle}>
              Аналитика и отчеты <br></br>по звонкам
            </div>
            <div className={s.mobileCardSubtitle}>Подробная статистика</div>
            <div className={s.mobileCardText}>
              Детализированная аналитика и отчеты по звонкам помогут отслеживать
              эффективность, анализировать работу операторов и оптимизировать
              процессы в колл-центре.
            </div>
          </div>
          <Image
            unoptimized={true}
            alt="sipuni-analytics"
            src={"/sipuni-analytics-mobile.png"}
            width={349}
            height={150}
            className={s.mobileImg}
          ></Image>
        </div>
        <div className={`${s.mobileCard} ${styles.mobileCard}`}>
          <div className={s.mobileContent}>
            <div className={s.mobileCardTitle}>Журналы звонков</div>
            <div className={s.mobileCardSubtitle}>Контроль пропущенных</div>
            <div className={s.mobileCardText} style={{ marginBottom: "0" }}>
              Журнал звонков с фиксированием всех вызовов и удобным контролем
              пропущенных, чтобы ни один клиент не остался без ответа.
            </div>
          </div>
          <Image
            alt="sipuni-screen"
            src={"/sipuni-screen-mobile.png"}
            width={349}
            height={240}
            className={s.mobileImg}
          ></Image>
        </div>
        <div className={s.mobileCard}>
          <div className={s.mobileContent}>
            <div className={s.mobileCardTitle}>Запись всех разговоров</div>
            <div className={s.mobileCardSubtitle}>
              Прослушивайте звонки менеджеров
            </div>
            <div className={s.mobileCardText}>
              Запись разговоров для контроля качества, обучения сотрудников и
              повышения уровня обслуживания клиентов.
            </div>
          </div>
          <Image
            unoptimized={true}
            alt="records"
            src={"/sipuni-records-mobile.png"}
            width={349}
            height={198}
            className={s.mobileImg}
          ></Image>
        </div>
        <div className={`${s.mobileCard} ${styles.mobileCard}`}>
          <div className={s.mobileContent}>
            <div className={s.mobileCardTitle}>Интеграция с CRM-системами</div>
            <div className={s.mobileCardSubtitle}>Настройка интеграций</div>
            <div className={s.mobileCardText}>
              Бесшовная интеграция с CRM для автоматизации работы, хранения
              истории звонков и улучшения взаимодействия с клиентами.
            </div>
          </div>
          <Image
            unoptimized={true}
            alt="integrations"
            src={"/sipuni-integrations-mobile.png"}
            width={349}
            className={s.mobileImg}
            height={144}
          ></Image>
        </div>
      </div>
    </div>
  );
}
