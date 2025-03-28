"use client"
import MainText from "../common/mainText";
import Title from "../common/title";
import s from "../common/css/web/Services.module.css";
import Card from "./serviceCard";
import { useState } from "react";
import Modal from "../common/modal";

export default function Services() {
  const [selectedCard, setSelectedCard] = useState<null | string>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpenModal = (title: string) => {
    setIsOpen(true)
    setSelectedCard(title);
  };
  const handleCloseModal = () => {
    setIsOpen(false)
    setTimeout(() => {
    setSelectedCard(null);
    }, 500)
  };

  return (
    <div className={`${s.wrapper} px-fluid`}>
      <div className={`block md:flex justify-between items-end ${s.title}`}>
        <div className="mobile-container">
          <Title
            title="Профессиональная разработка"
            title2={"с акцентом \nна результат"}
            subtitle="Доверьтесь нашему опыту"
            isService={true}
          ></Title>
        </div>
        <div className="mobile-container">
          <MainText
            order={4}
            text={[
              <p key={1}>
                Разработка сайта — это инвестиция, которая принесет бизнесу
                реальную ценность, конкурентоспособность и обеспечит
                долгосрочную отдачу.
              </p>,
            ]}
          ></MainText>
        </div>
      </div>
      <div className={s.cards}>
        <Card
          price="4 000 000"
          title="Одностраничный сайт"
          period="10-20 дней"
          subtitle="Landing Page"
          text="Сайт-визитка для презентации товаров, услуг, информации о компании или для рекламного мероприятия."
          img="/landing.svg"
          onOpen={() => handleOpenModal("Одностраничный сайт")}
          dataAos="fade-up"
          dataAosDelay="0"
        ></Card>
        <Card
          price="8 000 000"
          title="Многостраничный сайт"
          period="20-40 дней"
          subtitle="Multi-page"
          text="Многостраничный сайт для детального представления компании, ее услуг, товаров и преимуществ."
          img="/multipage.svg"
          onOpen={() => handleOpenModal("Многостраничный сайт")}
          dataAos="fade-up"
          dataAosDelay="200"
        ></Card>
        <Card
          price="12 000 000"
          title="Интернет-магазин"
          period="30-60 дней"
          subtitle="eCommerce"
          text="Онлайн-магазин для продажи товаров с удобным каталогом, системой оплаты и управления заказами."
          img="/ecommerce.svg"
          onOpen={() => handleOpenModal("Интернет-магазин")}
          dataAos="fade-up"
          dataAosDelay="0"
        ></Card>
        <Card
          price="20 000 000"
          title="Веб-сервисы и платфомы"
          period="от 60 дней"
          subtitle="WebApp"
          text="Сервисы и платформы для цифровых решений, интерактивных сервисов и эффективного онлайн-бизнеса"
          img="/platforms.svg"
          onOpen={() => handleOpenModal("Веб-сервисы и платфомы")}
          dataAos="fade-up"
          dataAosDelay="200"
        ></Card>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal} subtitle={selectedCard || ""} />
    </div>
  );
}
