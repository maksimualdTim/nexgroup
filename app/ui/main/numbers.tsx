import MainText from "../common/mainText";
import Title from "../common/title";
import styles from "../common/css/Numbers.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Numbers() {
  return (
    <div>
      <div
        className="px-fluid flex"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #0E0E0E 100%)",
        }}
      >
        <div
          className="w-[50%]"
          style={{
            paddingTop: "calc(130 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          <div className={styles.leftTopBlock}>
            <MainText
              text={[
                <p key={1}>
                  Мы предлагаем комплексный подход к оптимизации работы вашего
                  бизнеса, который позволит вам сэкономить время и ресурсы,
                  снизить риски и повысить прибыль.
                </p>,
              ]}
              order={4}
            />
          </div>
          <div className={styles.projectsNumberBlock}>
            <div
              className={styles.projectsNumber}
              style={{
                marginTop: "calc(15 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              50+
            </div>
            <div className={`inline-block text-fluid ${styles.period}`}>
              Успешных проектов
            </div>
          </div>
        </div>
        <div
          className={`w-[50%] ${styles.left}`}
          style={{
            paddingTop: "calc(130 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          <div className={`text-right ${styles.subtitle}`}>
            <Title
              title="Доверьте систематизацию"
              title2="вашего бизнеса профессионалам"
              subtitle="Двигайтесь с NEX"
              icon="/icons/light.svg"
              iconLeft={false}
            />
          </div>
          <div
            className="relative"
            style={{
              marginTop: "calc(173 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            <div
            className="relative z-10"
              style={{
                paddingLeft: "calc(48 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              <div
                className="font-semibold"
                style={{
                  fontSize: "calc(128 * (1px + (100vw - 1530px) / 1530))",
                  lineHeight: "calc(92 * (1px + (100vw - 1530px) / 1530))",
                  marginBottom: "calc(38 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                10+
              </div>
              <div className={`inline-block text-fluid ${styles.period}`}>
                Лет опыта
              </div>
            </div>
            <div
              className="flex flex-col items-end relative z-10"
              style={{
                marginTop: "calc(30 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              <div
                className="font-semibold"
                style={{
                  fontSize: "calc(128 * (1px + (100vw - 1530px) / 1530))",
                  lineHeight: "calc(92 * (1px + (100vw - 1530px) / 1530))",
                  marginBottom: "calc(38 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                300+
              </div>
              <div className={`inline-block text-fluid ${styles.period}`}>
                Обученных сотрудников
              </div>
            </div>
            <div className={`absolute ${styles.vint}`}>
              <Image
                src={"/vint.png"}
                alt="vint"
                width={511}
                height={407}
                style={{
                  width: "calc(511 * (1px + (100vw - 1530px) / 1530))",
                  height: "calc(407 * (1px + (100vw - 1530px) / 1530))",
                }}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="px-fluid" style={{ marginTop: "calc(41 * (1px + (100vw - 1530px) / 1530))", fontSize: "calc(15 * (1px + (100vw - 1530px) / 1530))"}}>
        <Link className="text-accent" href={"/"}>
          Рассчитать стоимость услуг
          <Image
            className="inline-block"
            src={"/icons/arrow-right-accent.svg"}
            alt="arrow"
            width={10}
            height={10}
            style={{
              width: "calc(10 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(10 * (1px + (100vw - 1530px) / 1530))",
              marginLeft: "calc(5 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </Link>
      </div>
    </div>
  );
}
