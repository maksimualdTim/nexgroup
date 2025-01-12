import Title from "../common/title";
import MainText from "../common/mainText";
import AdvantagesCard from "../common/advantages-card";
import Button from "../common/button";

export default function Advantages() {
    return (
        <div className="flex justify-between items-start py-block px-fluid" id="advantages">
            <div className="text-fluid sticky top-5">
                <div style={{marginBottom: "clamp(4.375rem, 5vw + 0.25rem, 9rem)"}}>
                    <Title 
                    title="Ваш бизнес работает лучше," 
                    title2="когда мы берёмся за дело" 
                    subtitle="Почему именно мы?"
                    />
                </div>
                <div className="mb-44">
                    <MainText 
                    order={3}
                    text={[
                        <p key={1} style={{marginBottom: '2rem'}}>Мы в NEX знаем, что эффективное управление и прозрачные коммуникации — это основа успешного бизнеса</p>,
                        <p key={2}>Мы помогаем устранить барьеры, оптимизировать процессы и внедрить современные технологии, чтобы ваш бизнес развивался быстрее и с меньшими усилиями</p>
                    ]} 
                    />
                </div>
                <div className="pb-5">
                    <Button 
                    link="/"
                    isFull={false}
                    text="Подробнее о NEX"
                    withArrow={false}
                    />
                </div>
            </div>
            <div className="advantages-cards p-6 rounded-[2rem] border-[1px] border-[#323232] w-[55%]">
                <div className="mb-4">
                    <AdvantagesCard 
                    iconPath="/icons/system.svg" 
                    title="Снижаем риски и минимизируем ошибки"
                    subtitle="Только лучшие системы и сервисы"
                    text="Благодаря четким процессам и современным технологиям, мы помогаем вам избежать потерь из-за человеческого фактора и управленческих просчетов."
                    />
                </div>
                <div className="mb-4">
                    <AdvantagesCard 
                    iconPath="/icons/eye.svg" 
                    title="Контроль и прозрачность на каждом уровне"
                    subtitle="Управление бизнес-процессами"
                    text="Наши решения обеспечивают полный контроль над всеми процессами вашей компании,от взаимодействия с клиентами до внутренних операций."
                    />
                </div>
                <div className="mb-4">
                    <AdvantagesCard 
                    iconPath="/icons/chart.svg" 
                    title="Максимизация доходов вашего бизнеса"
                    subtitle="Цифровая трансформация"
                    text="Настраиваем внутренние процессы и коммуникации таким образом, чтобы ваш бизнес мог расти и зарабатывать больше без дополнительных затрат."
                    />
                </div>
                <div>
                    <AdvantagesCard 
                    iconPath="/icons/head.svg" 
                    title="Гарантированная техническая поддержка"
                    subtitle="Решаем любые проблемы"
                    text="Мы предоставляем техническую помощь и консультации на всех этапах внедрения и эксплуатации, гарантируя стабильную работу вашего бизнеса."
                    />
                </div>
            </div>
        </div>
    )
}