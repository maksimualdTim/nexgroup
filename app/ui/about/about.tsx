import Header from "../common/header";
import s from "../common/css/about/Main.module.css";
import Title from "../common/title";
import Button from "../common/button";
import Expirience from "../common/expirience";
import Image from "next/image";

export default function Main() {
  return (
    <div className={`${s.main} relative overflow-hidden z-10`}>
      <Header></Header>
      <div className={`${s.container} px-fluid relative z-10 mobile-container`}>
        <div>
          <div>
            <Title
              title="Ускоряем эволюцию"
              title2="вашего бизнеса"
              subtitle="С нами проще и эффективнее"
              isMain={true}
              icon="/icons/light.svg"
            ></Title>
          </div>
          <div className={s.text}>
            Cоздаваем решения, которые реально работают и приносят пользу,
            помогая вам достичь новых уровней эффективности и роста.
          </div>
          <div className={s.btn}>
            <Button link="/" isFull={true} text="Начать сотрудничать"></Button>
          </div>
          <div>
            <Expirience left={true}></Expirience>
          </div>
        </div>
        <div>
          <div className="flex items-center block md:hidden">
            <Image
              width={0}
              height={0}
              alt="circle"
              src={"/icons/circle.svg"}
              style={{
                width: "calc(31 * (1px + (100vw - 430px) / 430))",
                height: "calc(31 * (1px + (100vw - 430px) / 430))",
                marginRight: "calc(15 * (1px + (100vw - 430px) / 430))",
              }}
            ></Image>
            <div
              className={`text-fluid opacity-50 font-semibold`}
              style={{
                maxWidth: "calc(233 * (1px + (100vw - 430px) / 430))",
              }}
            >
              Сильный бизнес начинается с правильных IT-решений
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 ${s.robot}`}>
        <Image
          src={"/robot.png"}
          alt="robot"
          width={1530}
          height={1139}
          style={{
            zIndex: "1",
            position: "relative",
          }}
        ></Image>
        <div className={s.elipse}></div>
      </div>
      <div className={s.overlay}></div>
    </div>
  );
}
