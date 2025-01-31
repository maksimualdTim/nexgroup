import Image from "next/image";
import Title from "../common/title";
import FaqItems from "../common/faq-items";
import s from "../common/css/FaqBlock.module.css";

export default function Faq() {
  return (
    <div className="px-fluid mobile-container">
      <div
        className="flex justify-between items-center"
        style={{
          marginBottom: "calc(87 * (1px + (100vw - 1530px) / 1530))",
        }}
      >
        <div>
          <Title
            title="Отвечаем на часто"
            title2="задаваемые вопросы"
            subtitle="FAQs"
          ></Title>
        </div>
        <div
          className="rounded-full hidden md:block"
          style={{
            padding: "calc(13 * (1px + (100vw - 1530px) / 1530))",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Image
            src={"/icons/faq.svg"}
            alt="faq"
            width={67}
            height={67}
            style={{
              width: "calc(67 * (1px + (100vw - 1530px) / 1530))",
              height: "calc(67 * (1px + (100vw - 1530px) / 1530))",
            }}
          ></Image>
        </div>
      </div>
      <div>
        <FaqItems
          faqData={[
            {
              question: "1. Какие сервисы и продукты мы предлагаем",
              answer:
                "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
            },
            {
              question: "2. Что такое amoCRM и зачем CRM моему бизнесу",
              answer:
                "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
            },
            {
              question:
                "3. Какие преимущества предлагает интеграция amoCRM с телефонией",
              answer:
                "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
            },
            {
              question:
                "4. Что такое IP-телефония и для чего она вам необходима",
              answer:
                "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
            },
            {
              question: "5. Сколько времени занимает разработка сайта",
              answer:
                "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
            },
            {
              question: "6. Какие этапы включает процесс разработки сайта",
              answer:
                "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
            },
          ]}
        ></FaqItems>
      </div>
      <div className={s.qWrapper}>
        <div className={`text-accent text-fluid font-semibold ${s.qTitle}`}>
          Возникли дополнительные вопросы?
        </div>
        <div className="text-fluid font-semibold">
          Пожалуйста, оставьте заявку или напишите нам в телеграм и мы будем
          рады оказать вам консультацию по вашему кейсу.
        </div>
      </div>
    </div>
  );
}
