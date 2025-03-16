"use client"
import Advantages from "../ui/sipuni/advantages";
import CTA from "../ui/sipuni/cta";
import Grow from "../ui/sipuni/grow";
import Info from "../ui/sipuni/info";
import Main from "../ui/sipuni/main";
import Steps from "../ui/sipuni/steps";
import Consultation from "../ui/main/consultation";
import ContactForm from "../ui/main/contact-form";
import Faq from "../ui/main/faq";
import Footer from "../ui/main/footer";
import NumbersAmo from "../ui/sipuni/numbers";
import { useState } from "react";
import Modal from "../ui/common/modal";

export default function Amo() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
    return (
        <>
       <Main setModalOpen={setModalOpen}></Main> 
       <Grow></Grow>
       <NumbersAmo></NumbersAmo>
       <Steps setModalOpen={setModalOpen}></Steps>
       <Info></Info>
       <CTA setModalOpen={setModalOpen}></CTA>
       <Advantages></Advantages>
       <div
          className="px-fluid mobile-container-card"
          style={{ marginBottom: "calc(160 * (1px + (100vw - 1530px) / 1530))" }}
        >
          <Consultation setModalOpen={() => setModalOpen(true)}></Consultation>
        </div>
        <Faq faqData={[
            {
              question: "1. Что такое IP-телефония и какие преимущества она предоставляет?",
              answer:
                "IP-телефония — это технология передачи голосовых данных через интернет-протокол, позволяющая снизить затраты на связь, улучшить качество звонков и обеспечить гибкость в настройке коммуникационных процессов.",
            },
            {
              question: "2. Какие возможности предоставляет интеграция Sipuni с  amoCRM?",
              answer: (
                <>
                  <p>Интеграция Sipuni с CRM-системой позволяет:</p>
                  <ul>
                    <li>Автоматически сохранять историю звонков и записи</li>
                    <li>Разговоров в карточках клиентов.</li>
                    <li>Распределять звонки на основе данных из CRM.</li>
                    <li>Увеличить эффективность работы отдела продаж за счет</li>
                    <li>Автоматизации процессов.</li>
                  </ul>
                </>
              )
            },
            {
              question:
                "3. Сколько устройств можно подключить для каждого сотрудника при использовании Sipuni?",
              answer: "В базовой интеграции Sipuni каждый сотрудник может использовать до четырех устройств, что обеспечивает гибкость и мобильность в работе.",
            },
            {
              question:
                "4. Как долго хранятся записи разговоров в системе Sipuni?",
              answer:
                "Записи разговоров хранятся в системе Sipuni в течение одного года, что позволяет анализировать и контролировать качество обслуживания клиентов.",
            },
            {
              question: "5. Какие дополнительные функции предоставляет Sipuni для бизнеса?",
              answer: (
                <>
                  <p>Помимо базовых функций звонков, Sipuni предлагает:</p>
                  <ul>
                    <li>Настройку шаблонов звонков.</li>
                    <li>Интеграцию с различными CRM-системами.</li>
                    <li>Гибкие настройки распределения звонков.</li>
                    <li>Подробную аналитику и отчеты по звонкам.</li>
                  </ul>
                </>
              )
            }
          ]}></Faq>
        <div style={{ marginTop: "calc(135 * (1px + (100vw - 1530px) / 1530))" }}>
          <ContactForm></ContactForm>
        </div>
        <Footer></Footer>
        <Modal isOpen={modalOpen} onClose={() => {setModalOpen(false)}}></Modal>
        
    </>
    )
}