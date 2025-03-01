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
            title2={"\nна рынке Узбекистана"}
            subtitle="Ваш сайт — следующий!"
            isService={true}
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
          title="Enera  |  Инвестиционный холдинг"
          description="Многостраничный сайт"
          tags={["Дизайн в Figma", "Разработка на Tilda"]}
          img="/portfolio/enera.jpg"
          link="https://enera.uz/"
        ></Card>
        <Card
          title="Yard  |  Бизнес клуб"
          description="Одностраничный сайт (лендинг)"
          tags={["Дизайн в Figma", "Разработка на Tilda"]}
          img="/portfolio/yard.jpg"
          link="https://ybc.uz/"
        ></Card>
        <Card
          title="Luxhouse  |  Архитектурное бюро"
          description="Многостраничный сайт"
          tags={["Дизайн в Figma", "Разработка с нуля"]}
          img="/portfolio/luxhouse.jpg"
          link="https://luxhouse.uz/"
        ></Card>
        <Card
          title="Divan  |  Магазин мебели"
          description="Онлайн-магазин"
          tags={["Дизайн в Figma", "Разработка с нуля"]}
          img="/portfolio/divan.jpg"
          link="https://divan.uz/"
        ></Card>
        <Card
          title="Fonon  |  Ювелирный магазин"
          description="Онлайн-магазин"
          tags={["Дизайн в Figma", "Разработка с нуля"]}
          img="/portfolio/fonon.jpg"
          link="https://fonon.uz/"
        ></Card>
        <Card
          title="Impact  |  Коворкинг и офисы"
          description="Одностраничный сайт (лендинг)"
          tags={["Дизайн в Figma", "Разработка на Framer"]}
          img="/portfolio/impact.jpg"
          link="https://impactthub.uz/"
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
