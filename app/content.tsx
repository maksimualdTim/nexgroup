"use client"
import Advantages from "./ui/main/advantages";
import Services from "./ui/main/services";
import Main from "./ui/main/main";
import Problems from "./ui/main/problems";
import Footer from "./ui/main/footer";
import ContactForm from "./ui/main/contact-form";
import Numbers from "./ui/main/numbers";
import Consultation from "./ui/main/consultation";
import Faq from "./ui/main/faq";
import InfiniteHorizontalScroll from "./ui/common/infinite";
import styles from "@/app/ui/common/css/MainBlock.module.css";
import Modal from "./ui/common/modal";
import { useState } from "react";
export default function Content() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const logos = [
      {
        path: "/logos/amo-main.svg",
        width: 120,
        height: 23,
      },
      {
        path: "/logos/sklad-main.svg",
        width: 158,
        height: 24,
      },
      {
        path: "/logos/web-main.svg",
        width: 68,
        height: 20,
      },
      {
        path: "/logos/sipuni-main.svg",
        width: 82,
        height: 19,
      },
      {
        path: "/logos/utel-main.svg",
        width: 69,
        height: 20,
      },
    ];
    return (
        <>
            <div
                className="relative"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 53.66%, #000000 100%)",
                }}
            >
                <video autoPlay muted loop id="bg-video" className={styles.video}>
                    <source src="/pc_1_compressed.webm" type="video/webm"></source>
                    <source src="/pc_1.mp4" type="video/mp4"></source>
                    Ваш браузер не поддерживает видео.
                </video>
                <Main setModalOpen={setModalOpen}></Main>
                <InfiniteHorizontalScroll logos={logos}></InfiniteHorizontalScroll>
            </div>
            <Problems setModalOpen={setModalOpen}></Problems>
            <Services setModalOpen={setModalOpen}></Services>
            <div className="relative">
                <div className="relative z-10">
                    <Advantages></Advantages>
                </div>
                <div
                    className="absolute w-full"
                    style={{
                        background: "linear-gradient(0deg, #030303 0%, #0E0E0E 100%)",
                        height: "calc(203 * (1px + (100vw - 1530px) / 1530))",
                        zIndex: 0,
                        bottom: 0,
                    }}
                ></div>
            </div>
            <Numbers setModalOpen={setModalOpen}></Numbers>
            <div
                className="px-fluid mobile-container-card"
                style={{ marginBottom: "calc(160 * (1px + (100vw - 1530px) / 1530))" }}
            >
                <Consultation setModalOpen={setModalOpen}></Consultation>
            </div>
            <Faq faqData={[
                {
                    question: "1. Какие услуги мы предоставляем?",
                    answer: "Мы занимаемся внедрением CRM-систем (amoCRM, Bitrix24), настройкой IP-телефонии и разработкой веб-сайтов. Наши решения помогают бизнесу автоматизировать продажи, улучшить клиентский сервис и эффективно управлять коммуникациями.",
                },
                {
                    question: "2. Чем полезна CRM-система для бизнеса?",
                    answer:
                        "CRM помогает структурировать работу отдела продаж, автоматизировать обработку заявок и контролировать взаимодействие с клиентами. Благодаря интеграции с телефонией и мессенджерами, компании могут фиксировать все контакты, а встроенная аналитика позволяет оценивать эффективность сотрудников и маркетинговых кампаний.",
                },
                {
                    question:
                        "3. Почему важно интегрировать IP-телефонию с CRM?",
                    answer: (
                        <>
                            <p>Интеграция IP-телефонии с CRM позволяет:</p>
                            <ul>
                                <li>Автоматически фиксировать входящие и исходящие звонки.</li>
                                <li>Записывать разговоры для контроля качества.</li>
                                <li>Разгружать менеджеров за счет автодозвона и голосовых ботов.</li>
                                <li>Анализировать эффективность продаж и загруженность сотрудников.</li>
                            </ul>
                            <p>Мы работаем с такими провайдерами, как SIPUNI, и адаптируем решения под бизнес-задачи клиентов.</p>
                        </>
                    )
                },
                {
                    question:
                        "4. Какие сайты вы разрабатываете?",
                    answer:
                        "Мы создаем корпоративные сайты, интернет-магазины, лендинги и сложные веб-сервисы. Разработка включает уникальный дизайн, адаптацию под мобильные устройства, Базовую SEO-оптимизацию и интеграцию с CRM и платежными системами.",
                },
                {
                    question: "5. Какой результат получает бизнес после внедрения ваших решений?",
                    answer: (
                        <>
                            <p>Наши клиенты отмечают:</p>
                            <ul>
                                <li>Рост продаж за счет автоматизации CRM и улучшения работы с лидами.</li>
                                <li>Снижение потерь клиентов благодаря интеграции телефонии и чат-ботов.</li>
                                <li>Повышение эффективности менеджеров за счет</li>
                                <li>Автоматических напоминаний и контроля задач.</li>
                            </ul>
                            <p>Если не уверены, какой сайт вам нужен, свяжитесь с нами, и мы подберем лучшее решение.</p>
                        </>
                    )
                },
                {
                    question: "6. Как проходит процесс работы с вами?",
                    answer:
                        (
                            <>
                                <p>Мы работаем по следующей схеме:</p>
                                <ul>
                                    <li>Анализ задач бизнеса и подбор оптимальных решений.</li>
                                    <li>Настройка CRM, телефонии или разработка сайта с учетом специфики компании.</li>
                                    <li>Тестирование и обучение сотрудников для эффективного использования системы.</li>
                                    <li>Запуск, поддержка и доработка по мере роста бизнеса.</li>
                                </ul>
                            </>
                        ),
                },
            ]}></Faq>
            <div style={{ marginTop: "calc(135 * (1px + (100vw - 1530px) / 1530))" }}>
                <ContactForm></ContactForm>
            </div>
            <Footer></Footer>
            <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false) }}></Modal>
        </>
    )
}