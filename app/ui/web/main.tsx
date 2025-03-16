import Header from "../common/header";
import s from "../common/css/amo/Main.module.css";
import styles from "../common/css/web/Main.module.css";

import Title from "../common/title";
import Button from "../common/button";

export default function Main({setModalOpen}: {setModalOpen: (open: boolean) => void}) {
  return (
    <div className={`${styles.wrapper}`}>
      <Header setModalOpen={setModalOpen}></Header>
      <div
        className={`px-fluid relative ${s.inner} ${styles.inner} mobile-container`}
      >
        <div>
          <div className={styles.title}>
            <Title
              title="Разработка веб-сайтов"
              title2=""
              subtitle="WEB DEV"
              isMain={true}
              icon="/icons/light.svg"
            ></Title>
          </div>
          <div className={s.text}>
            Проектируем функциональные сайты, сочетающие технологичность,
            гибкость и соответствие уникальным требованиям вашего бизнеса.
          </div>
          <div className="flex justify-between items-end">
            <div className={`block md:flex ${s.btns}`}>
              <div
                style={{
                  marginRight: "calc(11 * (1px + (100vw - 1530px) / 1530))",
                }}
                onClick={() => setModalOpen(true)}
              >
                <Button
                  text="Заказать сайт"
                  isFull={true}
                  withArrow={true}
                  link=""
                />
              </div>
              <div>
                <Button
                  text="Подробнее"
                  isFull={false}
                  withArrow={false}
                  link="#info"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.rightVideoBlock}>
          <video autoPlay muted className={styles.rightVideo} poster="/poster.jpg">
            {/* <source src="/laptop_compressed.webm" type="video/webm"></source> */}
            {/* <source src="/laptop.mp4" type="video/mp4"></source> */}
            <source src="/test.mp4" type="video/mp4"></source>
            Ваш браузер не поддерживает видео.
          </video>
          <div className={styles.overlay}></div>
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.panel}>
          <div className={styles.panelNumber}>30&lt;</div>
          <div className={styles.panelContent}>
            <div className={styles.panelTitle}>Успешных веб-проектов</div>
            <div className={styles.panelText}>
              Разработали и запустили <br></br>более 50 крупных проектов{" "}
              <br></br>по сайтам для клиентов
            </div>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={styles.panelContent}>
            <div className={styles.panelTitle}>Более 5 лет на рынке</div>
            <div className={styles.panelText}>
              Проектируем и внедряем <br></br>лучшие IT-решения в ваш <br></br>
              бизнес с 2019 года.
            </div>
          </div>
          <div className={styles.panelNumber}>5&lt;</div>
        </div>
      </div>
    </div>
  );
}
