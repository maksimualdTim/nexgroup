import Title from "../common/title";
import MainText from "../common/mainText";
import ServiceCardLong from "../common/service-card-long";
import ServiceCardShort from "../common/service-card-short";
import Button from "../common/button";
import Image from "next/image";

export default function Services() {
    return (
        <div className="py-block px-fluid" id="services">
            <div className="flex justify-between" style={{marginBottom: "calc(80 * (1px + (100vw - 1530px) / 1530))"}}>
                <div>
                    <MainText 
                    text={[<p key={1}>Внедряем эффективные решения для автоматизации процессов, улучшения коммуникации, а также роста и развития вашего бизнеса.</p>]} 
                    order={2}
                    />
                </div>
                <div className="text-right">
                    <Title 
                    title="Предлагаемые услуги по"
                    title2="разработке и автоматизации"
                    subtitle="Наши решения"
                    />
                </div>
            </div>
            <div>
                <div className="flex justify-between" style={{marginBottom: "calc(24 * (1px + (100vw - 1530px) / 1530))", minHeight: "calc(436 * (1px + (100vw - 1530px) / 1530))"}}>
                    <div className="w-[66%]">
                        <ServiceCardLong
                        link="/"
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
                    <div className="w-[33%]">
                    <ServiceCardShort
                        link="/"
                        title="Внедрение системы МойСклад"
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
                <div className="flex justify-between" style={{minHeight: "calc(436 * (1px + (100vw - 1530px) / 1530))"}}>
                    <div className="w-[33%]">
                        <ServiceCardShort
                        link="/"
                        title="Внедрение IP-телефонии"
                        text="Удобное решение для коммуникации с клиентами, которое упрощает работу менеджеров."
                        logo="/logos/utel.svg"
                        logoWidth={30}
                        logoHeight={34}
                        period="От 10 дней"
                        order={3}
                        image="/utel.png"
                        />
                    </div>
                    <div className="w-[66%]">
                        <ServiceCardLong
                        link="/"
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
            <div className="flex justify-between items-center" style={{marginTop: "calc(64 * (1px + (100vw - 1530px) / 1530))"}}>
                <div>
                    <Button 
                    text="Обсудить проект"
                    withArrow={true}
                    link="/"
                    isFull={true}
                    />
                </div>
                <div>
                    <Image 
                    src={"/logos/nex.svg"}
                    alt="logo"
                    width={0}
                    height={0}
                    style={{
                        width: "calc(69 * (1px + (100vw - 1530px) / 1530))",
                        height: "calc(19 * (1px + (100vw - 1530px) / 1530))"
                    }}
                    />
                </div>
            </div>
        </div>
    )
}