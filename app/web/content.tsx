"use client"
import ContactForm from "../ui/main/contact-form";
import Faq from "../ui/main/faq";
import Footer from "../ui/main/footer";
import Aspects from "../ui/web/aspects";
import Info from "../ui/web/info";
import Main from "../ui/web/main";
import Portfolio from "../ui/web/portfolio";
import Services from "../ui/web/services";
import styles from "@/app/ui/common/css/web/Main.module.css";
import Steps from "../ui/web/steps";
import { useState } from "react";
import Modal from "../ui/common/modal";

export default function Content() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    return (
        <div>
            <div className="relative min-h-screen">
                <video autoPlay muted loop id="bg-video" playsInline className={styles.video}>
                    <source src="/web_compressed.webm" type="video/webm"></source>
                    <source src="/web.mp4" type="video/mp4"></source>
                    Ваш браузер не поддерживает видео.
                </video>
                <Main setModalOpen={setModalOpen}></Main>
            </div>
            <div className="block md:hidden">
                {/* <video autoPlay muted style={{
            height: "calc(354 * (1px + (100vw - 430px) / 430))",
            objectFit: "cover"
          }}>
            <source src="/laptop_compressed.webm" type="video/webm"></source>
            <source src="/laptop.mp4" type="video/mp4"></source>
            Ваш браузер не поддерживает видео.
          </video> */}
            </div>
            <Info setModalOpen={setModalOpen}></Info>
            <Steps setModalOpen={setModalOpen}></Steps>
            <Portfolio></Portfolio>
            <Services></Services>
            <Aspects></Aspects>
            <Faq faqData={[
                {
                    question: "1. Какие сайты вы разрабатываете?",
                    answer: (
                        <>
                            <p>Мы разрабатываем сайты разного уровня сложности, включая:</p>
                            <ul>
                                <li>Лендинги / Одностраничные сайты</li>
                                <li>Корпоративные сайты</li>
                                <li>Интернет-магазины</li>
                                <li>Порталы и CRM-интегрированные решения</li>
                            </ul>
                        </>
                    ),
                },
                {
                    question: "2. Сколько стоит разработка сайта?",
                    answer:
                        "Стоимость зависит от типа сайта, его сложности и дополнительных функций. Оставьте заявку или позвоните нам, чтобы получить индивидуальный расчет.",
                },
                {
                    question:
                        "3. Как долго занимает разработка сайта?",
                    answer:
                        "В среднем, создание сайта занимает от 2 недель до 2 месяцев, в зависимости от его сложности и количества функций.",
                },
                {
                    question:
                        "4. Делаете ли вы SEO-оптимизацию сайта?",
                    answer:
                        "Мы оптимизируем сайты для поисковых систем (Google, Yandex), включая разметку, скорость загрузки, адаптивность и настройку мета-тегов.",
                },
                {
                    question: "5. Как выбрать правильный тип сайта для моего бизнеса?",
                    answer: (
                        <>
                            <p>Выбор типа сайта зависит от ваших целей и особенностей бизнеса:</p>
                            <ul>
                                <li>Лендинг – подходит для рекламы одного продукта или услуги, акций, мероприятий.</li>
                                <li>Корпоративный сайт – для компаний, которым важно представить свои услуги, команду и кейсы.</li>
                                <li>Интернет-магазин – если нужен полноценный каталог товаров с корзиной, оплатой и интеграциями.</li>
                                <li>Порталы, CRM-решения – для сложных проектов с личными кабинетами, базами данных и автоматизированными процессами.</li>
                            </ul>
                            <p>Если не уверены, какой сайт вам нужен, свяжитесь с нами, и мы подберем лучшее решение.</p>
                        </>
                    )

                },
                {
                    question: "6. Могу ли я сам управлять контентом на сайте после разработки?",
                    answer:
                        (
                            <>
                                <p>Да, мы разрабатываем сайты на удобных CMS (системах управления контентом), таких как WordPress, Tilda или используем индивидуально-разработанные административные панели для сайта.</p>
                                <p>Вы сможете легко обновлять текст, изображения, добавлять новости или товары без необходимости обращаться к программистам. При необходимости мы проведем обучение по управлению сайтом.</p>
                            </>
                        ),
                },
            ]}></Faq>
            <div style={{ marginTop: "calc(135 * (1px + (100vw - 1530px) / 1530))" }}>
                <ContactForm></ContactForm>
            </div>
            <Footer></Footer>
            <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false) }} product="Разработка сайтов"></Modal>
        </div>
    )
}