import Title from "../common/title";
import MainText from "../common/mainText";
import ProblemCard from "../common/problem-card";
import Link from "next/link";
import Image from "next/image";
import styles from "../common/css/ProblemCard.module.css";
import Button from "../common/button";

export default function Problems() {
  return (
    <div
      className="px-fluid"
      style={{
        paddingTop: "calc(108 * (1px + (100vw - 1530px) / 1530))",
        paddingBottom: "calc(108 * (1px + (100vw - 1530px) / 1530))",
      }}
    >
      <div className="flex justify-between">
        <div>
          <Title
            title="Решаем ключевые проблемы"
            title2="управления и коммуникации"
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
      <div style={{ marginTop: "calc(50 * (1px + (100vw - 1530px) / 1530))", fontSize: "calc(15 * (1px + (100vw - 1530px) / 1530))"}}>
        <Link className="text-accent" href={"/"}>
          Все предоставляемые услуги
          <Image
            className="inline-block"
            src={"/icons/arrow-diag.svg"}
            alt="arrow"
            width={0}
            height={0}
            style={{
              width: "calc(10 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(10 * (1px + (100vw - 1530px) / 1530))",
              marginLeft: "calc(5 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </Link>
      </div>

      <div
        style={{ marginTop: "calc(166 * (1px + (100vw - 1530px) / 1530))" }}
        className="relative"
      >
        <Image
          className="absolute left-1/2 -translate-x-1/2"
          src={"/problems-bg.png"}
          alt="sphere"
          width={1122}
          height={1150}
          style={{
            top: "calc(-180 * (1px + (100vw - 1530px) / 1530))",
            width: "calc(1130 * (1px + (100vw - 1530px) / 1530))",
            height: "calc(1130 * (1px + (100vw - 1530px) / 1530))",
          }}
        ></Image>
        <div className="flex justify-between">
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

        <div
          className="flex"
          style={{
            marginBottom: "calc(14 * (1px + (100vw - 1530px) / 1530))",
            marginTop: "calc(22 * (1px + (100vw - 1530px) / 1530))",
          }}
        >
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
        <div className="flex justify-between">
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
          style={{ marginTop: "calc(79 * (1px + (100vw - 1530px) / 1530))" }}
        >
          <Button isFull={true} text="Консультация" withArrow={true} link="/" />
        </div>
      </div>
    </div>
  );
}
