import Image from "next/image";

import Button from "../common/button";
import Title from "../common/title";
import Header from "../common/header";

export default function Main() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/main.png')",
        paddingBottom: "calc(85 * (1px + (100vw - 1530px) / 1530))",
      }}
    >
      <Header></Header>
      <div className="px-fluid">
        <div className="flex justify-between items-end" style={{
          // paddingBottom: "calc(40 * (1px + (100vw - 1530px) / 1530))",
          marginTop: "calc(320 * (1px + (100vw - 1530px) / 1530))"
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
