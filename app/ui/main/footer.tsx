import Link from "next/link";
import Title from "../common/title";
import styles from "../common/css/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div
    className="px-fluid"
      style={{ paddingBottom: "calc(28 * (1px + (100vw - 1530px) / 1530))" }}
    >
      <div className="flex justify-between">
        <div>
          <div className={styles.subtitle}>
            <Title
              title="Комплексная"
              title2="автоматизация бизнеса"
              subtitle="Двигайтесь с NEX"
              icon="/icons/light.svg"
            />
          </div>
          <div
            className="font-semibold opacity-50 text-fluid"
            style={{
              lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))",
              maxWidth: "calc(230 * (1px + (100vw - 1530px) / 1530))",
              marginTop: "calc(33 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            Сильный бизнес начинается с правильных IT-решений
          </div>
        </div>
        <div
          className="flex relative"
          style={{
            columnGap: "calc(91 * (1px + (100vw - 1530px) / 1530))",
            top: "calc(40 * (1px + (100vw - 1530px) / 1530))",
            paddingRight: "calc(108 * (1px + (100vw - 1530px) / 1530))"
          }}
        >
          <div className="column">
            <div className={styles.title}>Навигация</div>
            <ul>
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
                <Link href={"/"} className={styles.link}>
                  Все услуги
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/"} className={styles.link}>
                  Лицензии и тарифы
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/"} className={styles.link}>
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
                <Link href={"/"} className={styles.link}>
                  Внедрение amoCRM
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "calc(30 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Link href={"/"} className={styles.link}>
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
          <div className="column">
            <div className={styles.title}>Контакты</div>
            <ul>
              <li
                style={{
                  marginBottom: "calc(41 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <div
                  className={styles.link}
                  style={{
                    marginBottom: "calc(23 * (1px + (100vw - 1530px) / 1530))",
                  }}
                >
                  Номер телефона
                </div>
                <Link
                  style={{
                    fontSize: "calc(20 * (1px + (100vw - 1530px) / 1530))",
                    lineHeight: "calc(9 * (1px + (100vw - 1530px) / 1530))",
                    fontWeight: 500,
                  }}
                  href={"tel:+998 (90) 333-77-39"}
                >
                  +998 (90) 333-77-39
                </Link>
              </li>
              <li
                style={{
                  marginBottom: "calc(41 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <div
                  className={styles.link}
                  style={{
                    marginBottom: "calc(23 * (1px + (100vw - 1530px) / 1530))",
                  }}
                >
                  Электронная почта
                </div>
                <Link
                  href={"mailto:info@nexgroup.uz"}
                  style={{
                    fontSize: "calc(20 * (1px + (100vw - 1530px) / 1530))",
                    lineHeight: "calc(9 * (1px + (100vw - 1530px) / 1530))",
                    fontWeight: 500,
                  }}
                >
                  info@nexgroup.uz
                </Link>
              </li>
              <li>
                <div
                  className={styles.link}
                  style={{
                    marginBottom: "calc(22 * (1px + (100vw - 1530px) / 1530))",
                  }}
                >
                  Социальные сети
                </div>
                <Link target="_blank" href={"https://t.me/nexgroup_support"}>
                  <Image
                    src={"/icons/telegram.svg"}
                    width={32}
                    height={32}
                    alt="telegram"
                    className="inline-block"
                    style={{
                      width: "calc(32 * (1px + (100vw - 1530px) / 1530))",
                      height: "calc(32 * (1px + (100vw - 1530px) / 1530))",
                      marginRight: "calc(10 * (1px + (100vw - 1530px) / 1530))",
                    }}
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
                    className="inline-block"
                    style={{
                      width: "calc(32 * (1px + (100vw - 1530px) / 1530))",
                      height: "calc(32 * (1px + (100vw - 1530px) / 1530))",
                    }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between items-end"
        style={{ marginTop: "calc(76 * (1px + (100vw - 1530px) / 1530))" }}
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
                  style={{
                    width: "calc(179 * (1px + (100vw - 1530px) / 1530))",
                    height: "calc(47 * (1px + (100vw - 1530px) / 1530))",
                  }}
                />
              </div>
            </Link>
          </div>
          <div
            className="text-[#7C7C7C] font-medium"
            style={{
              fontSize: "calc(14 * (1px + (100vw - 1530px) / 1530))",
              lineHeight: "calc(19 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            © NEX GROUP 2025. Все права защищены.
          </div>
        </div>
        <div
          className="text-[#4A4A4A] font-medium"
          style={{
            fontSize: "calc(14 * (1px + (100vw - 1530px) / 1530))",
            lineHeight: "calc(19 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          www.nexgroup.uz
        </div>
      </div>
    </div>
  );
}
