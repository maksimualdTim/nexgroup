"use client"
import Advantages from "../ui/amo/advantages";
import CTA from "../ui/amo/cta";
import Grow from "../ui/amo/grow";
import Info from "../ui/amo/info";
import Main from "../ui/amo/main";
import Steps from "../ui/amo/steps";
import Consultation from "../ui/main/consultation";
import ContactForm from "../ui/main/contact-form";
import Faq from "../ui/main/faq";
import Footer from "../ui/main/footer";
import NumbersAmo from "../ui/amo/numbers";
import { useState } from "react";
import Modal from "../ui/common/modal";
import CTA2 from "../ui/amo/cta2";

export default function Content() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    return (
        <>
            <Main setModalOpen={setModalOpen}></Main>
            <Grow></Grow>
            <NumbersAmo></NumbersAmo>
            <CTA2 setModalOpen={setModalOpen}></CTA2>
            <Steps setModalOpen={setModalOpen}></Steps>
            <Info></Info>
            <CTA setModalOpen={setModalOpen}></CTA>
            <Advantages></Advantages>
            <div
                className="px-fluid mobile-container-card"
                style={{ marginBottom: "calc(160 * (1px + (100vw - 1530px) / 1530))" }}
            >
                <Consultation setModalOpen={setModalOpen}></Consultation>
            </div>
            <Faq faqData={[
                {
                    question: "1. Что такое amoCRM и какие преимущества она предоставляет бизнесу в Узбекистане?",
                    answer:
                        "amoCRM — это система управления взаимоотношениями с клиентами, которая помогает автоматизировать процессы продаж, улучшать коммуникацию с клиентами и увеличивать прибыль. Она обеспечивает контроль над каждой сделкой, интеграцию с различными каналами связи и аналитические инструменты для оценки эффективности продаж.",
                },
                {
                    question: "2. Как проходит процесс внедрения amoCRM в компанию?",
                    answer: (
                        <>
                            <p>Процесс включает несколько этапов:</p>
                            <ul>
                                <li>Анализ потребностей: определение целей и задач вашего бизнеса.</li>
                                <li>Настройка системы: адаптация amoCRM под специфические требования вашей компании.</li>
                                <li>Интеграция: подключение к существующим системам, таким как IP-телефония и мессенджеры.</li>
                                <li>Обучение персонала: проведение тренингов для эффективного использования системы.</li>
                                <li>Поддержка и оптимизация: техническая поддержка и регулярное обновление настроек для достижения максимальной эффективности.</li>
                            </ul>
                        </>
                    )
                },
                {
                    question:
                        "3. Какие тарифные планы доступны для amoCRM в Узбекистане?",
                    answer: (
                        <>
                            <p>amoCRM предлагает несколько тарифных планов:</p>
                            <ul>
                                <li>Базовый: 79 000 сум в месяц за пользователя.</li>
                                <li>Расширенный: 149 000 сум в месяц за пользователя.</li>
                                <li>Профессиональный: 209 000 сум в месяц за пользователя.</li>
                            </ul>
                            <p>Каждый тариф отличается набором функций и возможностей. </p>
                        </>
                    ),
                },
                {
                    question:
                        "4. С какими системами можно интегрировать amoCRM?",
                    answer:
                        "amoCRM поддерживает интеграцию с различными сервисами, включая IP-телефонию (например, Sipuni), мессенджеры (например, Telegram или WhatsApp), email-сервисы и другие бизнес-инструменты, что позволяет централизовать коммуникации и улучшить управление продажами.",
                },
                {
                    question: "5. Как долго длится процесс внедрения amoCRM?",
                    answer:
                        "Сроки внедрения зависят от сложности проекта и специфики бизнеса, но в среднем процесс занимает от нескольких дней до нескольких недель. Важно обеспечить активное участие вашей команды для оперативного согласования этапов и предоставления необходимой информации.",
                }
            ]}></Faq>
            <div style={{ marginTop: "calc(135 * (1px + (100vw - 1530px) / 1530))" }}>
                <ContactForm></ContactForm>
            </div>
            <Footer></Footer>
            <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false) }} product="amoCRM"></Modal>
        </>
    )
}