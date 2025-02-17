import Card from "./portfolioCard";
import s from "../common/css/web/PortfolioCard.module.css";
import Title from "../common/title";
import Image from "next/image";
import Button from "../common/button";

export default function Portfolio() {
  return (
    <div className={s.wrapper}>
      <div className="flex justify-between items-center mobile-container px-fluid">
        <div className={s.titleWrapper}>
          <Title
            title="Создаем лучшие проекты"
            title2="на рынке Узбекистана"
            subtitle="Ваш сайт — следующий!"
          ></Title>
        </div>
        <div className="hidden md:block">
          <Image
            className={s.logo}
            src={"/logos/web-logo.svg"}
            width={236}
            height={65}
            alt="logo"
          ></Image>
        </div>
      </div>
      <div className={`${s.cards} px-fluid`}>
        <Card
          title="CONCEPT  |  Производственная мастерская"
          description="Одностраничный сайт (лендинг)"
          tags={["Дизайн в Figma", "Разработка с нуля"]}
          img="/portfolio-master.png"
          link="/dev"
        ></Card>
        <Card
          title="CONCEPT  |  Производственная мастерская"
          description="Одностраничный сайт (лендинг)"
          tags={["Дизайн в Figma", "Разработка с нуля"]}
          img="/portfolio-master.png"
          link="/dev"
        ></Card>
        <Card
          title="CONCEPT  |  Производственная мастерская"
          description="Одностраничный сайт (лендинг)"
          tags={["Дизайн в Figma", "Разработка с нуля"]}
          img="/portfolio-master.png"
          link="/dev"
        ></Card>
        <Card
          title="CONCEPT  |  Производственная мастерская"
          description="Одностраничный сайт (лендинг)"
          tags={["Дизайн в Figma", "Разработка с нуля"]}
          img="/portfolio-master.png"
          link="/dev"
        ></Card>
        <Card
          title="CONCEPT  |  Производственная мастерская"
          description="Одностраничный сайт (лендинг)"
          tags={["Дизайн в Figma", "Разработка с нуля"]}
          img="/portfolio-master.png"
          link="/dev"
        ></Card>
        <Card
          title="CONCEPT  |  Производственная мастерская"
          description="Одностраничный сайт (лендинг)"
          tags={["Дизайн в Figma", "Разработка с нуля"]}
          img="/portfolio-master.png"
          link="/dev"
        ></Card>
      </div>
      <div className={`${s.bottom} px-fluid`}>
        <div>
          <Button
            text="Все проекты"
            isFull={true}
            withArrow={true}
            link="/dev"
          />
        </div>
        <div className={s.flower}>
            <Image alt="flower" width={56} height={56} src={"/icons/flower.svg"}></Image>
        </div>
      </div>
    </div>
  );
}
