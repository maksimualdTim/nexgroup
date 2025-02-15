import Link from "next/link";
import Title from "../common/title";
import styles from "../common/css/Footer.module.css";
import Image from "next/image";
import FooterForm from "../common/footer-form";

export default function Footer() {
  return (
    <div
      className={`px-fluid mobile-container ${styles.footer}`}
    >
      <div className={`block md:hidden ${styles.formWrapper}`}>
        <div>
          <div className="text-accent">Форма для связи</div>
          <div className={`${styles.formTitle} font-semibold`}>Обсудим ваш проект?</div>
        </div>
        <FooterForm text="Оставить заявку"></FooterForm>
      </div>      
      <div className="block md:flex justify-between">
        <div>
          <div className={styles.subtitle}>
            <Title
              title="Комплексная"
              title2="автоматизация бизнеса"
              subtitle="Двигайтесь с NEX"
              icon="/icons/light.svg"
            />
          </div>
          <div className={`font-semibold opacity-50 text-fluid ${styles.text}`}>
            Сильный бизнес начинается с правильных IT-решений
          </div>
        </div>
        <div
          className={`flex relative flex-wrap ${styles.flexContainer}`}
          style={{
            columnGap: "calc(91 * (1px + (100vw - 1530px) / 1530))",
            top: "calc(40 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          <div className="column">
            <div className={styles.title}>Навигация</div>
            <ul className={styles.linkList}>
              <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/"} className={styles.link}>
                  Главная
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/#services"} className={styles.link}>
                  Все услуги
                </Link>
              </li>
              {/* <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/"} className={styles.link}>
                  Лицензии и тарифы
                </Link>
              </li> */}
              <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/about"} className={styles.link}>
                  О компании
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/"} className={styles.link}>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <div className={styles.title}>Услуги</div>
            <ul>
              <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/amo"} className={styles.link}>
                  Внедрение amoCRM
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/sipuni"} className={styles.link}>
                  Внедрение IP-телефонии
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/"} className={styles.link}>
                  Внедрение МойСклад
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/"} className={styles.link}>
                  Разработка веб-сайтов
                </Link>
              </li>
            </ul>
          </div>
          <div className={`column ${styles.lastColumn}`}>
            <div className={styles.title}>Контакты</div>
            <ul>
              <li className={styles.socialLi}>
                <div className={`${styles.link} ${styles.infoBigWrapper}`}>
                  Номер телефона
                </div>
                <Link
                  className={styles.infoBig}
                  href={"tel:+998 (90) 333-77-39"}
                >
                  +998 (90) 333-77-39
                </Link>
              </li>
              <li className={styles.socialLi}>
                <div className={`${styles.link} ${styles.infoBigWrapper}`}>
                  Электронная почта
                </div>
                <Link
                  href={"mailto:info@nexgroup.uz"}
                  className={styles.infoBig}
                >
                  info@nexgroup.uz
                </Link>
              </li>
              <li>
                <div className={`${styles.link} ${styles.socialWrapper}`}>
                  Социальные сети
                </div>
                <Link target="_blank" href={"https://t.me/nexgroup_support"}>
                  <Image
                    src={"/icons/telegram.svg"}
                    width={32}
                    height={32}
                    alt="telegram"
                    className={`inline-block ${styles.icon}`}
                  />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/nexgroup.uz"}
                >
                  <Image
                    src={"/icons/instagram.svg"}
                    width={32}
                    height={32}
                    alt="instagram"
                    className={`inline-block ${styles.icon}`}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`block md:flex justify-between items-end ${styles.copyrightWrapper}`}
      >
        <div>
          <div
            style={{
              marginBottom: "calc(24 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            <Link href={"/"} className="flex items-center">
              <div>
                <Image
                  src={"/logos/nex-full.svg"}
                  alt="logo"
                  width={0}
                  height={0}
                  className={styles.logo}
                />
              </div>
            </Link>
          </div>
          <div className={`text-[#7C7C7C] font-medium ${styles.copyright}`}>
            © NEX GROUP 2025. Все права защищены.
          </div>
        </div>
        <div
          className={`text-[#4A4A4A] font-medium ${styles.site}`}
        >
          www.nexgroup.uz
        </div>
      </div>
    </div>
  );
}
