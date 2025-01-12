import Image from "next/image";
import Link from "next/link";
import Button from "../common/button";
import Title from "../common/title";


export default function Main() {
    return (
      <div className="px-fluid min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/main.png')"}}>
        <header className="pt-9 flex items-center justify-between">
          <div className="inline-block">
            <Link href={"/"} className="flex items-center">
                <div>
                <Image 
                    src={"/logos/nex-full.svg"}
                    alt="logo"
                    width={179}
                    height={47}
                />
                </div>
            </Link>
          </div>
          <div className="text-fluid font-semibold leading-8 pl-20">
            <Link href={"/"} className="mr-12">Все услуги</Link>
            <Link href={"/"} className="mr-12">Лицензии</Link>
            <Link href={"/"} className="mr-12">О компании</Link>
            <Link href={"/"}>Контакты</Link>
          </div>
          <div className="flex items-center mr-[-3.75rem]">
            <div className="rounded-xl mr-1" style={{backdropFilter: 'blur(50px)', background: 'rgba(255, 255, 255, 0.15)' }}>
                <Link href={"/"} className="p-[10px] w-full h-full inline-block text-[14px] font-semibold opacity-85">RU</Link>
            </div>
            <div className="rounded-xl" style={{border: '1px solid rgba(164, 164, 164, 0.29)'}}>
                <Link href={"/"} className="p-[10px] w-full h-full inline-block text-[14px] font-semibold opacity-85">UZ</Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-right flex flex-col mr-8">
                <Link href={"tel:+998 90 333-77-39"} className="text-fluid font-semibold leading-4">+998 90 333-77-39</Link>
                <Link href={"tel:+998 90 333-77-39"} className="opacity-50 text-xs underline leading-4">Заказать звонок</Link>
            </div>
            <div className="header-btn">
                <Button 
                link="/"
                text="Оставить заявку"
                isFull={true}
                withArrow={false}
                />
            </div>
          </div>
        </header>

        <div className="mt-96">
            <div className="main-title">
                <Title 
                    title="Помогаем бизнесу стать сильнее" 
                    title2="с помощью цифровых решений" 
                    subtitle="Умная автоматизация бизнеса"
                    isMain={true}
                />
                <div className="mt-10 flex items-center">
                    <div className="mr-3">
                    <Button
                    text="Обсудить проект"
                    isFull={true}
                    withArrow={true}
                    link="/"
                    />
                    </div>
                    <div>
                    <Button
                    text="Подробнее о нас"
                    isFull={false}
                    withArrow={false}
                    link="/"
                    />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}