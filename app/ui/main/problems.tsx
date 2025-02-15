import Title from "../common/title";
import MainText from "../common/mainText";
import ProblemCard from "../common/problem-card";
import Link from "next/link";
import Image from "next/image";
import styles from "../common/css/ProblemCard.module.css";
import Button from "../common/button";
import s from "../common/css/ProblemsBlock.module.css";

export default function Problems() {
  return (
    <div className={s.wrapper}>
      <Image
        className={`block absolute left-1/2 -translate-x-1/2 md:hidden ${s.bg}`}
        src={"/problems-mobile.png"}
        alt="sphere"
        width={1122}
        height={1150}
      ></Image>
      <div
        className="px-fluid mobile-container-card"
        style={{
          paddingTop: "calc(108 * (1px + (100vw - 1530px) / 1530))",
          paddingBottom: "calc(108 * (1px + (100vw - 1530px) / 1530))",
        }}
      >
        <div className="block justify-between md:flex">
          <div>
            <Title
              title="Решаем ключевые проблемы"
              title2="управления и&nbsp;коммуникации"
              subtitle="Анализируем процессы"
            />
          </div>
          <div>
            <MainText
              order={1}
              text={[
                <p key={1} className="font-semibold">
                  Мы помогаем избавиться от хаоса в бизнесе, наводим порядок в
                  данных и делаем работу команды по-настоящему эффективной.
                </p>,
              ]}
            />
          </div>
        </div>
        <div className={`relative z-10 ${s.link}`}>
          <Link className="text-accent" href={"/"}>
            Все предоставляемые услуги
            <Image
              className={`inline-block ${s.linkIcon}`}
              src={"/icons/arrow-diag.svg"}
              alt="arrow"
              width={0}
              height={0}
            ></Image>
          </Link>
        </div>

        <div
          className={`relative ${s.cardsWrapper}`}
        >
          <Image
            className={`hidden absolute left-1/2 -translate-x-1/2 md:block ${s.bg}`}
            src={"/problems-bg.png"}
            alt="sphere"
            width={1122}
            height={1150}
          ></Image>
          <div className={`block justify-between md:flex ${s.top}`}>
            <div>
              <ProblemCard
                textWidth={298}
                className={styles["problem-left"]}
                title="Потеря клиентов"
                text="Заявки теряются или обрабатываются слишком долго, что снижает доверие
        и лояльность клиентов."
                icon="/icons/users.svg"
                order="I"
              />
            </div>
            <div>
              <ProblemCard
                textWidth={306}
                className={styles["problem-right"]}
                title="Проблемы с коммуникацией"
                text="Отсутствие интегрированной телефонии приводит к пропущенным звонкам, которые могли бы стать сделками."
                icon="/icons/radiohead.svg"
                order="II"
              />
            </div>
          </div>

          <div className={`block md:flex ${s.center}`}>
            <div className="mx-auto">
              <ProblemCard
                textWidth={337}
                className={styles["problem-center"]}
                title="Сложности с анализом"
                text="Отсутствие инструментов для аналитики мешает видеть картину продаж и принимать стратегически важные решения."
                icon="/icons/circles.svg"
                order="III"
              />
            </div>
          </div>
          <div className="hidden justify-between md:flex">
            <div>
              <ProblemCard
                textWidth={335}
                className={styles["problem-left"]}
                title="Отсутствие контроля"
                text="Нет инструментов для отслеживания задач, звонков и взаимодействий с клиентами, что снижает прозрачность и производительность."
                icon="/icons/recicle.svg"
                order="IV"
              />
            </div>
            <div>
              <ProblemCard
                textWidth={298}
                className={styles["problem-right"]}
                title="Рутинные задачи"
                text="Сотрудники тратят слишком много времени на ручное выполнение задач, которые можно автоматизировать."
                icon="/icons/list.svg"
                order="V"
              />
            </div>
          </div>
          <div
            className={`relative z-10 ${s.btn}`}
          >
            <Button
              isFull={true}
              text="Консультация"
              withArrow={true}
              link="https://t.me/nexgroup_support"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
