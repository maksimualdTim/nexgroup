import Image from "next/image";
import Title from "../common/title";
import FaqItems from "../common/faq-items";
import s from "../common/css/FaqBlock.module.css";
import Link from "next/link";
import { FAQItem } from "../common/faq-items";

export default function Faq({ faqData }: {faqData: FAQItem[]}) {
  return (
    <div className="px-fluid mobile-container">
      <div
        data-aos="fade-up"
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
      <div data-aos="fade-up">
        <FaqItems
          faqData={faqData}
        ></FaqItems>
      </div>
      <div className={s.qWrapper} data-aos="fade-up">
        <div className={`text-accent text-fluid font-semibold ${s.qTitle}`}>
          Возникли дополнительные вопросы?
        </div>
        <div className="text-fluid font-semibold">
          Пожалуйста, <Link href={"/contacts"}>оставьте заявку</Link> или <Link href={"https://t.me/nexgroup_support"} target="_blank">напишите нам в телеграм</Link> и мы будем
          рады оказать вам консультацию по вашему кейсу.
        </div>
      </div>
    </div>
  );
}
