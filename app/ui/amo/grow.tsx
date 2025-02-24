import Image from "next/image";
import s from "../common/css/amo/Grow.module.css";
import Title from "../common/title";

export default function Grow() {
  return (
    <div className={`${s.wrapper} px-fluid`}>
      <div
        className={`flex justify-between items-end mobile-container ${s.title}`}
      >
        <div>
          <Title
            title="Новая точка роста"
            title2="для&nbsp;вашего бизнеса"
            subtitle="Продвинутая CRM-система"
            isService={true}
          ></Title>
        </div>
        <div className="flex items-center hidden md:flex">
          <div className={s.text}>
            Вся ваша команда включится в работу CRM с первого дня 
          </div>
          <Image
            src={"/icons/cloud.svg"}
            width={24}
            height={24}
            className={s.cloud}
            alt="cloud"
          ></Image>
        </div>
      </div>
      <div className={`flex flex-wrap hidden md:flex ${s.cards}`}>
        <div className={`${s.card} ${s.cardLongTop} ${s.cardLong}`}>
          <div>
            <Image
              src={"/amo-long-top.png"}
              alt="amo"
              width={835}
              height={301}
              className={s.cardImage}
            ></Image>
          </div>
          <div className={s.cardContent}>
            <div className={s.cardTitle}>Обрабатывайте поступающие заявки</div>
            <div className={s.cardSubtitle}>Коммуникация и общение</div>
            <div className={s.cardText}>
              Обрабатывайте заявки с разных источников и ведите коммуникацию с
              помощью мессенджера со скоростью молнии прямо в интерфейсе
              программы. 
            </div>
          </div>
        </div>
        <div className={`${s.card} ${s.cardShortTop} ${s.cardShort}`}>
          <div className={s.cardContent}>
            <div className={s.cardTitle}>Не теряйте клиентов</div>
            <div className={s.cardSubtitle}>Полный контроль</div>
            <div className={s.cardText}>
              amoCRM собирает заявки из всех каналов и добавляет их в воронку
              продаж, исключая потери клиентов. 
            </div>
          </div>
          <div className="relative" style={{
            top: "calc(2* (1px + (100vw - 1530px) / 1530))"
          }}>
            <Image
              src={"/amo-screen.png"}
              alt="amo"
              width={611}
              height={315}
              className={s.cardImage}
              unoptimized={true}
            ></Image>
          </div>
        </div>
        <div className={`${s.card} ${s.cardShortBot} ${s.cardShort}`}>
          <div>
            <Image
              src={"/amo-imbox.png"}
              alt="amo"
              width={611}
              height={315}
              className={s.cardImage}
              unoptimized={true}
            ></Image>
          </div>
          <div className={s.cardContent}>
            <div className={s.cardTitle}>Отвечайте с ПК и телефона</div>
            <div className={s.cardSubtitle}>Удобный чат с клиентами</div>
            <div className={s.cardText}>
              Обрабатывайте все сообщения из мессенджеров и чатов прямо в одном
              приложении — с любого устройства, в любое время.
            </div>
          </div>
        </div>
        <div className={`${s.card} ${s.cardLongBot} ${s.cardLong}`}>
          <div className={s.cardContent}>
            <div className={s.cardTitle}>Ставьте продажи на автопилот</div>
            <div className={s.cardSubtitle}>Digital-воронка</div>
            <div className={s.cardText}>
              Диджитал воронка позволяет интегрировать в вашу воронку продаж
              весь спектр онлайн инструментов коммуникации и утепления клиентов.
            </div>
          </div>
          <div>
            <Image
              src={"/amo-path.png"}
              alt="amo"
              width={835}
              height={190}
              className={s.cardImage}
              unoptimized={true}
            ></Image>
          </div>
        </div>
      </div>
      <div className={`${s.mobileCards} block md:hidden`}>
        <div className={s.mobileCard}>
          <div className={s.mobileContent}>
            <div className={s.mobileCardTitle}>
              Обрабатывайте <br></br> поступающие заявки
            </div>
            <div className={s.mobileCardSubtitle}>Коммуникация и общение</div>
            <div className={s.mobileCardText}>
              Обрабатывайте заявки с разных источников и ведите коммуникацию с
              помощью мессенджера со скоростью молнии прямо в интерфейсе
              программы. 
            </div>
            <Image
              unoptimized={true}
              alt="amo"
              src={"/amo-long-top-mobile.png"}
              width={349}
              height={150}
              className={s.mobileImg}
            ></Image>
          </div>
        </div>
        <div className={s.mobileCard}>
          <div className={s.mobileContent}>
            <div className={s.mobileCardTitle}>Не теряйте клиентов</div>
            <div className={s.mobileCardSubtitle}>Полный контроль</div>
            <div className={s.mobileCardText} style={{ marginBottom: "0" }}>
              amoCRM собирает заявки из всех каналов и добавляет их в воронку
              продаж, исключая потери клиентов.
            </div>
          </div>
          <Image
            alt="amo"
            src={"/amo-screen.png"}
            width={349}
            height={240}
            className={s.mobileImg}
          ></Image>
        </div>
        <div className={s.mobileCard}>
          <div className={s.mobileContent}>
            <div className={s.mobileCardTitle}>Отвечайте с ПК и телефона</div>
            <div className={s.mobileCardSubtitle}>Удобный чат с клиентами</div>
            <div className={s.mobileCardText}>
              Обрабатывайте все сообщения из мессенджеров и чатов прямо в одном
              приложении — с любого устройства, в любое время.
            </div>
          </div>
          <Image
            unoptimized={true}
            alt="amo"
            src={"/amo-imbox-mobile.png"}
            width={349}
            height={198}
            className={s.mobileImg}
          ></Image>
        </div>
        <div className={s.mobileCard}>
          <div className={s.mobileContent}>
            <div className={s.mobileCardTitle}>
              Ставьте продажи<br></br> на автопилот
            </div>
            <div className={s.mobileCardSubtitle}>Digital-воронка</div>
            <div className={s.mobileCardText}>
              Диджитал воронка позволяет интегрировать в вашу воронку продаж
              весь спектр онлайн инструментов коммуникации и утепления клиентов.
            </div>
          </div>
          <Image
            unoptimized={true}
            alt="amo"
            src={"/amo-path-mobile.png"}
            width={349}
            className={s.mobileImg}
            height={144}
          ></Image>
        </div>
      </div>
    </div>
  );
}
