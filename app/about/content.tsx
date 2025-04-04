"use client"
import Footer from "@/app/ui/main/footer";
import ContactForm from "@/app/ui/main/contact-form";
import Numbers from "@/app/ui/main/numbers";
import Consultation from "@/app/ui/main/consultation";
import Faq from "@/app/ui/main/faq";
import Main from "../ui/about/about";
import Partner from "../ui/about/partner";
import Steps from "../ui/about/steps";
import Modal from "../ui/common/modal";
import { useState } from "react";
import s from "../ui/common/css/about/Page.module.css";
export default function Content() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    return (
        <>
            <Main setModalOpen={setModalOpen}></Main>
            <Partner></Partner>
            <Steps></Steps>
            <div
                className="px-fluid mobile-container-card"
                style={{ marginBottom: "calc(160 * (1px + (100vw - 1530px) / 1530))" }}
            >
                <Consultation bg="/consultation.png" mobileBg="/consultation-mobile.png" setModalOpen={setModalOpen}></Consultation>
            </div>
            <Numbers setModalOpen={setModalOpen}></Numbers>
            <div className={s.faq}>
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
            </div>
            <div style={{ marginTop: "calc(135 * (1px + (100vw - 1530px) / 1530))" }}>
                <ContactForm></ContactForm>
            </div>
            <Footer></Footer>
            <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false) }}></Modal>
        </>
    )
}