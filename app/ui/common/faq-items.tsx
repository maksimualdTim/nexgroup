"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";
import styles from "@/app/ui/common/css/FAQ.module.css";

// Тип для элемента FAQ
export interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

export default function FaqItems({ faqData }: { faqData: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <ul className="basis-1/2">
        {faqData.map((item, index) => (
          <li key={index} className={styles.answer} data-aos="fade-up">
            <button
              className={`relative flex gap-2 items-center w-full text-left text-[#e0e0e0] ${styles.btn}`}
              aria-expanded={openIndex === index}
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              <Image
                src={"/icons/plus.svg"}
                alt="plus"
                width={20}
                height={20}
                className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform ${
                  openIndex === index ? "rotate-45" : ""
                } ${styles.icon}`}
              ></Image>
            </button>

            <div
              className={`transition-all duration-400 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div
                style={{
                  paddingBottom: "calc(20 * (1px + (100vw - 1530px) / 1530))",
                  lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))",
                }}
              >
                <div
                className={styles.text}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
