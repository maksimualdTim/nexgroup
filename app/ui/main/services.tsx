import Title from "../common/title";
import MainText from "../common/mainText";
import ServiceCardLong from "../common/service-card-long";
import ServiceCardShort from "../common/service-card-short";
import Button from "../common/button";
import Image from "next/image";
import s from "../common/css/ServicesBlock.module.css";

export default function Services({setModalOpen} : {setModalOpen: (open: boolean) => void}) {
    return (
        <div className="py-block px-fluid mobile-container-card" id="services">
            <div className={`flex justify-between ${s.top}`} style={{marginBottom: "calc(80 * (1px + (100vw - 1530px) / 1530))"}} data-aos="fade-up">
                <div className={s.topContainer}>
                    <MainText 
                    text={[<p key={1}>Внедряем эффективные решения для автоматизации процессов, улучшения коммуникации, а также роста и развития вашего бизнеса.</p>]} 
                    order={2}
                    />
                </div>
                <div className={`text-left md:text-right ${s.title}`}>
                    <Title 
                    title="Предлагаемые услуги по"
                    title2="разработке и автоматизации"
                    subtitle="Наши решения"
                    />
                </div>
            </div>
            <div>
                <div className={`flex justify-between flex-col md:flex-row ${s.rowFirst}`}>
                    <div className="w-[100%] md:w-[66%]" data-aos="fade-up">
                        <ServiceCardLong
                        link="/amo"
                        title="Внедрение CRM-системы"
                        text="Внедрим систему автоматизации продаж и управления клиентами, поможем повысить эффективность менеджеров"
                        logo="/logos/amo.svg"
                        logoWidth={124}
                        logoHeight={24}
                        period="От 14 дней"
                        order={1}
                        image="/amo.png"
                        />
                    </div>
                    <div className="w-[100%] md:w-[33%]" data-aos="fade-up" data-aos-delay="300">
                    <ServiceCardShort
                        link="/dev"
                        title={"Внедрение \nсистемы МойСклад"}
                        text="Внедрим облачную система для учета товаров, заказов и финансов."
                        logo="/logos/sklad.svg"
                        logoWidth={43}
                        logoHeight={32}
                        period="От 20 дней"
                        order={2}
                        image="/sklad.png"
                        />
                    </div>
                </div>
                <div className={`flex justify-between flex-col md:flex-row ${s.rowSecond}`} style={{minHeight: "calc(436 * (1px + (100vw - 1530px) / 1530))"}}>
                    <div className="w-[100%] md:w-[33%]" data-aos="fade-up">
                        <ServiceCardShort
                        link="/sipuni"
                        title={"Внедрение \nIP-телефонии"}
                        text="Удобное решение для коммуникации с клиентами, которое упрощает работу менеджеров."
                        logo="/logos/utel.svg"
                        logoWidth={30}
                        logoHeight={34}
                        period="От 10 дней"
                        order={3}
                        image="/utel.png"
                        />
                    </div>
                    <div className="w-[100%] md:w-[66%]" data-aos="fade-up" data-aos-delay="200">
                        <ServiceCardLong
                        link="/web"
                        title="Разработка веб-сайтов"
                        text="Создаем современные и адаптивные сайты с уникальным дизайном, удобной навигацией и интеграциями."
                        logo="/logos/web.svg"
                        logoWidth={78}
                        logoHeight={21}
                        period="От 30 дней"
                        order={4}
                        image="/web.png"
                        />
                    </div>
                </div>
            </div>
            <div className={`block md:flex justify-between items-center ${s.btnWrapper}`}>
                <div data-aos="fade-up" onClick={() => setModalOpen(true)}>
                    <Button 
                    text="Обсудить проект"
                    withArrow={true}
                    link=""
                    isFull={true}
                    />
                </div>
                <div className={s.logoWrapper} data-aos="fade-up">
                    <Image 
                    src={"/logos/nex.svg"}
                    alt="logo"
                    width={0}
                    height={0}
                    className={s.logo}
                    />
                </div>
            </div>
        </div>
    )
}