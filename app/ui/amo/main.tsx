import Header from "../common/header";
import s from "../common/css/amo/Main.module.css";
import Title from "../common/title";
import Button from "../common/button";
import Image from "next/image";

export default function Main() {
  return (
    <div className={s.wrapper}>
      <Header></Header>
      <div className={`px-fluid relative ${s.inner} mobile-container`}>
        {/* <Image className="absolute" width={1530} height={799} alt="macbook" src={"/mackbook.png"}></Image> */}
        <Title
          title="Внедрение amoCRM"
          title2=""
          subtitle="Автоматизация отдела продаж"
          isMain={true}
          icon="/icons/light.svg"
        ></Title>
        <div className={s.text}>
          Полный набор инструментов, который экономит время сотрудникам отдела
          продаж и систематизирует работу с вашими клиентами.
        </div>
        <div className="flex justify-between items-end">
          <div className={`block md:flex ${s.btns}`}>
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
                text="Подробнее"
                isFull={false}
                withArrow={false}
                link="/"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <Image src={"/logos/amo-main.svg"} width={148} height={28} className={s.logo} alt="amo"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
