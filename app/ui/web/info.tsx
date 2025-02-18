import Image from "next/image";
import s from "../common/css/amo/Grow.module.css";
import styles from "../common/css/web/Info.module.css";
import Title from "../common/title";

export default function Info() {
  return (
    <div className={`${styles.wrapper}`}>
      <div
        className={`px-fluid flex justify-between items-end mobile-container ${s.title}`}
      >
        <div>
          <Title
            title={"Проектируем сайты\n"}
            title2="для бизнеса любого масштаба"
            subtitle="Веб-разработка"
            isService={true}
          ></Title>
        </div>
        <div className="flex items-center hidden md:flex">
          <div className={`${s.text} ${styles.text}`}>
            Формируем доверие и открываем новые возможности для вашего роста
          </div>
          <Image
            src={"/icons/web-cursor.svg"}
            width={24}
            height={24}
            className={s.cloud}
            alt="cloud"
          ></Image>
        </div>
      </div>
      <div className={`${styles.cards} px-fluid`}>
        <div className={styles.cardLong}>
          <div className={styles.cardLongImg}>
            <Image
              src={"/robot-laptop.png"}
              width={459}
              height={367}
              alt="robot-laptop"
              unoptimized={true}
            ></Image>
          </div>
          <div className={styles.cardLongContent}>
            <div className={styles.subtitle}>Анализ бизнеса</div>
            <div className={styles.title}>Уникальный подход</div>
            <div className={styles.cardLongText}>
              Проектируем сайты, которые не только укрепляют вашу репутацию, но
              и формируют долгосрочное доверие к вашему бизнесу.
            </div>
          </div>
        </div>
        <div className={styles.miniCards}>
          <div className={`${styles.card} ${styles.cardTop}`}>
            <Image
              src={"/web-spirale.png"}
              width={408}
              height={234}
              alt="spirale"
            ></Image>
            <div className={styles.period}>
              <span>Сайты под ключ</span>
            </div>
            <div className={styles.content}>
              <div className={styles.subtitle}>Полный цикл</div>
              <div className={styles.title}>Дизайн и разработка сайта</div>
            </div>
          </div>
          <div
            className={`${styles.card} ${styles.cardTop} ${styles.cardTopBackground}`}
          >
            <div className={styles.period}>
              <span>Запуск сайта</span>
            </div>
            <div className={styles.content}>
              <div className={styles.subtitle}>Домен / хостинг</div>
              <div className={styles.title}>Публикация вашего сайта в сети</div>
            </div>
          </div>
          <div
            className={`${styles.card} ${styles.cardTop} ${styles.cardBottom}`}
          >
            <div className={styles.content}>
              <div className={styles.subtitle}>Проектирование с нуля</div>
              <div className={styles.title}>От идеи до реализации проекта</div>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardOrder}`}>
            <div className={styles.cardOrderTop}>
              <div>
                <div className={styles.cardOrderSubtitle}>
                  Заказать разработку
                </div>
                <div className={styles.title}>Обсудим ваш будущий проект?</div>
              </div>
              <div>
                <Image
                  src={"/icons/flower.svg"}
                  alt="flower"
                  width={43}
                  height={43}
                  className={styles.flower}
                ></Image>
              </div>
            </div>
            <div className={styles.cardOrderBottom}>
              <div className={styles.cardText}>
                Определимся с техническим заданием, составим план действий и
                подготовим коммерческое.
              </div>
              <div className="relative">
                <div className={`bg-white rounded-full ${styles.btn}`}>
                  <div style={{height: "100%"}}>
                    <Image
                      src={"/icons/arrow-right.svg"}
                      alt="arrow"
                      width={0}
                      height={0}
                      className={styles.arrow}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
