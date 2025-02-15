import MainText from "../common/mainText";
import Title from "../common/title";
import s from "../common/css/web/Services.module.css";
import Card from "./serviceCard";

export default function Services() {
  return (
    <div className={`${s.wrapper} px-fluid`}>
      <div className={`block md:flex justify-between items-end ${s.title}`}>
        <div className="mobile-container">
          <Title
            title="Профессиональная разработка"
            title2="с акцентом на результат"
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
          img="/landing.png"
        ></Card>
        <Card
          price="8 000 000"
          title="Многостраничный сайт"
          period="20-40 дней"
          subtitle="Multi-page"
          text="Многостраничный сайт для детального представления компании, ее услуг, товаров и преимуществ."
          img="/multipage.png"
        ></Card>
        <Card
          price="12 000 000"
          title="Интернет-магазин"
          period="30-60 дней"
          subtitle="eCommerce"
          text="Онлайн-магазин для продажи товаров с удобным каталогом, системой оплаты и управления заказами."
          img="/ecommerce.png"
        ></Card>
        <Card
          price="20 000 000"
          title="Веб-сервисы и платфомы"
          period="от 60 дней"
          subtitle="WebApp"
          text="Сервисы и платформы для цифровых решений, интерактивных сервисов и эффективного онлайн-бизнеса"
          img="/platforms.png"
        ></Card>
      </div>
    </div>
  );
}
