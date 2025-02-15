import Image from "next/image";
import Button from "../common/button";
import styles from "../common/css/Consultation.module.css";
import TelegramButton from "../common/telegramButton";
import Title from "../common/title";
import Lavr from "../common/lavr";

export default function Consultation({bg = "/3D-Black.png", mobileBg="/3D-Black-mobile.png"}: {bg?: string, mobileBg?: string}) {
  return (
    <div className={styles.consultation}>
      <div className="flex justify-between relative hidden md:flex">
        <div>
          <div>
            <Title
              title="Сделайте первый шаг"
              title2="к эффективному бизнесу"
              subtitle="Бесплатная консультация"
              icon="/icons/circle-white.svg"
            />
          </div>
          <div
            className="flex"
            style={{ marginTop: "calc(60 * (1px + (100vw - 1530px) / 1530))" }}
          >
            <div
              style={{
                marginRight: "calc(12 * (1px + (100vw - 1530px) / 1530))",
              }}
            >
              <Button
                link="https://t.me/nexgroup_support"
                isFull={true}
                withArrow={false}
                text="Начать автоматизацию"
              />
            </div>
            <div className="relative z-10">
              <TelegramButton
                link="https://t.me/nexgroup_support"
                text="Написать в телеграм"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute z-0"
          style={{
            top: "calc(-66 * (1px + (100vw - 1530px) / 1530))",
            right: "calc(-33 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          <Image
            src={bg}
            width={885}
            height={379}
            alt="3dpng"
            style={{
              width: "calc(885 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(384 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
        <div className="flex flex-col justify-between items-end relative">
          <div
            className="relative"
            style={{
              top: "calc(-23 * (1px + (100vw - 1530px) / 1530))",
            }}
          >
            <Image
              src={"/logos/nex-logo.svg"}
              alt="logo"
              width={81}
              height={47}
              style={{
                width: "calc(81 * (1px + (100vw - 1530px) / 1530))",
                height: "calc(47 * (1px + (100vw - 1530px) / 1530))",
              }}
            />
          </div>
          <Lavr></Lavr>
        </div>
      </div>
      <div className="block md:hidden relative z-10">
        <div
          className="relative"
          style={{
            top: "calc(-23 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
          <Image
            src={"/logos/nex-logo.svg"}
            alt="logo"
            width={81}
            height={47}
            style={{
              width: "calc(81 * (1px + (100vw - 430px) / 430))",
              height: "calc(47 * (1px + (100vw - 430px) / 430))",
            }}
          />
        </div>
        <div
          style={{
            marginTop: "calc(38 * (1px + (100vw - 430px) / 430))",
            marginBottom: "calc(44 * (1px + (100vw - 430px) / 430))",
          }}
        >
          <Title
            title="Сделайте первый шаг"
            title2="к эффективному бизнесу"
            subtitle="Бесплатная консультация"
            icon="/icons/circle-white.svg"
          />
        </div>
        <div>
          <Button
            link="https://t.me/nexgroup_support"
            isFull={true}
            withArrow={false}
            text="Начать автоматизацию"
          />
        </div>
        <div style={{
          marginTop: "calc(13 * (1px + (100vw - 430px) / 430))"
        }}>
          <TelegramButton
            link="https://t.me/nexgroup_support"
            text="Написать в телеграм"
          />
        </div>
        <div>
          <Lavr></Lavr>
        </div>
      </div>
      <div
          className="absolute z-0 block md:hidden"
          style={{
            bottom: "-1px",
            width: "102%",
            right: "0"
          }}
        >
          <Image
            src={mobileBg}
            width={395}
            height={522}
            alt="3dpng"
            style={{
              width: "100%",
              height: "auto",
            }}
          ></Image>
        </div>
    </div>
  );
}
