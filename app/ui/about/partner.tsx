import Title from "../common/title";
import s from "../common/css/about/Partner.module.css";
import Card from "./aboutCard";

export default function Partner() {
  return (
    <div className={`${s.wrapper}`}>
      <div className="px-fluid mobile-container">
        <div className={s.aboutTitle}>
          <Title
            title="Ваш партнёр в построении"
            title2="эффективного и бизнеса"
            subtitle="NEX GROUP"
          ></Title>
        </div>
        <div className={s.columns}>
          <div className={s.column}>
            <div className={s.columnTitle}>Создаём возможности</div>
            <div className={s.columnText}>
              Каждое наше решение — это инструмент, который помогает вашему
              бизнесу расти, а процессам становиться проще и быстрее.
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnTitle}>Говорим на языке клиентов</div>
            <div className={s.columnText}>
              Мы строим долгосрочные партнёрства, которые помогают вам достигать
              большего и открывать новые горизонты.
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnTitle}>Достигаем результата</div>
            <div className={s.columnText}>
              Добиваемся поставленных целей, создавая решения, которые приносят
              реальную пользу вашему бизнесу.
            </div>
          </div>
        </div>
      </div>
      <div className={s.graphic}>
        <div className={`${s.cards} mobile-container`}>
          <Card
            title="Стратегия"
            text="Разрабатываем решения, которые интегрируются в долгосрочную стратегию вашего бизнеса."
            icon="/icons/code.svg"
          ></Card>
          <Card
            title="Системность"
            text="Выстраиваем лучшие комплексные решения, которые интегрируются в вашу бизнес-структуру."
            icon="/icons/solar.svg"
          ></Card>
          <Card
            title="Поддержка"
            text="Предоставляем поддержку, обеспечивая стабильность и эффективность на всех этапах реализации."
            icon="/icons/radiohead.svg"
          ></Card>
        </div>
        <div className={`absolute ${s.graphicText}`}>Анализируем</div>
        <div className={`absolute ${s.graphicText}`}>Внедряем системы</div>
        <div className={`absolute ${s.graphicText}`}>Масштабируем бизнес</div>
      </div>
    </div>
  );
}
