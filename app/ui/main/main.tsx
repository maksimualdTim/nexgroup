import Image from "next/image";
import Link from "next/link";
import Button from "../common/button";
import Title from "../common/title";
import styles from "../common/css/HeaderBtn.module.css";

export default function Main() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/main.png')",
        paddingBottom: "calc(85 * (1px + (100vw - 1530px) / 1530))",
      }}
    >
      <div className="px-fluid min-h-screen flex flex-col justify-between">
        <header
          className="flex items-center justify-between"
          style={{ paddingTop: "calc(25 * (1px + (100vw - 1530px) / 1530))" }}
        >
          <div className="inline-block">
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
            className="text-fluid font-semibold"
            style={{
              paddingLeft: "calc(80 * (1px + (100vw - 1530px) / 1530))",
              lineHeight: "calc(32 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            <Link
              href={"/"}
              style={{
                marginRight: "calc(48 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              Все услуги
            </Link>
            <Link
              href={"/"}
              style={{
                marginRight: "calc(48 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              Лицензии
            </Link>
            <Link
              href={"/"}
              style={{
                marginRight: "calc(48 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              О компании
            </Link>
            <Link href={"/"}>Контакты</Link>
          </div>
          <div
            className="flex items-center"
            style={{
              marginRight: "calc(-60 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            <div
              style={{
                backdropFilter: "blur(50px)",
                background: "rgba(255, 255, 255, 0.15)",
                marginRight: "calc(4 * (1px + (100vw - 1530px) / 1530))",
                borderRadius: "calc(10 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              <Link
                href={"/"}
                className="w-full h-full inline-block font-semibold opacity-85 text-fluid"
                style={{
                  fontSize: "calc(14 * (1px + (100vw - 1530px) / 1530))",
                  padding: "calc(10 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                RU
              </Link>
            </div>
            <div
              style={{
                border: "1px solid rgba(164, 164, 164, 0.29)",
                borderRadius: "calc(10 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              <Link
                href={"/"}
                className="w-full h-full inline-block text-fluid font-semibold opacity-85"
                style={{
                  fontSize: "calc(14 * (1px + (100vw - 1530px) / 1530))",
                  padding: "calc(10 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                UZ
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="text-right flex flex-col"
              style={{
                marginRight: "calc(32 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              <Link
                href={"tel:+998 90 333-77-39"}
                className="text-fluid font-semibold"
                style={{
                  lineHeight: "calc(16 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                +998 90 333-77-39
              </Link>
              <Link
                href={"tel:+998 90 333-77-39"}
                className="opacity-50 underline"
                style={{
                  lineHeight: "calc(16 * (1px + (100vw - 1530px) / 1530))",
                  fontSize: "calc(13 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                Заказать звонок
              </Link>
            </div>
            <div className={`header-btn ${styles.headerBtn}`}>
              <Button
                link="/"
                text="Оставить заявку"
                isFull={true}
                withArrow={false}
              />
            </div>
          </div>
        </header>

        <div className="flex justify-between items-end" style={{
          paddingBottom: "calc(40 * (1px + (100vw - 1530px) / 1530))"
        }}>
          <div className="main-title">
            <Title
              title="Помогаем бизнесу стать сильнее"
              title2="с помощью цифровых решений"
              subtitle="Умная автоматизация бизнеса"
              isMain={true}
              icon="/icons/nombus.svg"
            />
            <div
              className="flex items-center"
              style={{
                marginTop: "calc(46 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              <div
                style={{
                  marginRight: "calc(11 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <Button
                  text="Обсудить проект"
                  isFull={true}
                  withArrow={true}
                  link="/"
                />
              </div>
              <div>
                <Button
                  text="Подробнее о нас"
                  isFull={false}
                  withArrow={false}
                  link="/"
                />
              </div>
            </div>
          </div>
          <div className="flex items-end flex-col">
            <div className="flex items-center">
              <div
                className="text-fluid opacity-50 text-right font-semibold"
                style={{
                  maxWidth: "calc(233 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                Сильный бизнес начинается с правильных IT-решений
              </div>
              <Image
                width={0}
                height={0}
                alt="circle"
                src={"/icons/circle.svg"}
                style={{
                  width: "calc(31 * (1px + (100vw - 1530px) / 1530))",
                  height: "calc(31 * (1px + (100vw - 1530px) / 1530))",
                  marginLeft: "calc(15 * (1px + (100vw - 1530px) / 1530))",
                }}
              ></Image>
            </div>
            <div
              className="flex"
              style={{
                background: "#3C3C3C42",
                backdropFilter: "blur(100px)",
                paddingLeft: "calc(44 * (1px + (100vw - 1530px) / 1530))",
                paddingRight: "calc(44 * (1px + (100vw - 1530px) / 1530))",
                paddingBottom: "calc(35 * (1px + (100vw - 1530px) / 1530))",
                paddingTop: "calc(35 * (1px + (100vw - 1530px) / 1530))",
                borderRadius: "calc(20 * (1px + (100vw - 1530px) / 1530))",
                marginTop: "calc(22 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              <div
                className="font-semibold"
                style={{
                  fontSize: "calc(96 * (1px + (100vw - 1530px) / 1530))",
                  lineHeight: "calc(94 * (1px + (100vw - 1530px) / 1530))",
                  paddingRight: "calc(10 * (1px + (100vw - 1530px) / 1530))",
                  borderRight: "1px solid #3B3B3B",
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  backgroundImage: "linear-gradient(90deg, #FFFFFF 35%, rgba(25, 25, 25, 0) 100%)"
                }}
              >
                10+
              </div>
              <div
                style={{
                  maxWidth: "calc(140 * (1px + (100vw - 1530px) / 1530))",
                  paddingLeft: "calc(26 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <div
                  className="text-accent font-semibold"
                  style={{
                    fontSize: "calc(14 * (1px + (100vw - 1530px) / 1530))",
                    lineHeight: "calc(19 * (1px + (100vw - 1530px) / 1530))",
                    marginBottom: "calc(9 * (1px + (100vw - 1530px) / 1530))",
                  }}
                >
                  Опыт работы
                </div>
                <div
                  className="text-fluid"
                  style={{
                    lineHeight: "calc(19 * (1px + (100vw - 1530px) / 1530))",
                  }}
                >
                  Более 10 лет опыта в сфере автоматизации
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between opacity-50 px-fluid"
        style={{
          marginTop: "calc(116 * (1px + (100vw - 1530px) / 1530))",
        }}
      >
        <div>
          <Image
            src={"/logos/amo-main.svg"}
            width={0}
            alt="amoCRM"
            height={0}
            style={{
              width: "calc(148 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(29 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
        <div>
          <Image
            src={"/logos/sklad-main.svg"}
            width={0}
            alt="amoCRM"
            height={0}
            style={{
              width: "calc(194 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(29 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
        <div>
          <Image
            src={"/logos/web-main.svg"}
            width={0}
            alt="amoCRM"
            height={0}
            style={{
              width: "calc(78 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(22 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
        <div>
          <Image
            src={"/logos/sipuni-main.svg"}
            width={0}
            alt="amoCRM"
            height={0}
            style={{
              width: "calc(101 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(23 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
        <div>
          <Image
            src={"/logos/utel-main.svg"}
            width={0}
            alt="amoCRM"
            height={0}
            style={{
              width: "calc(85 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(25 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
      </div>
    </div>
  );
}
