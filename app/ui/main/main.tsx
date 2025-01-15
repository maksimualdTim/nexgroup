import Image from "next/image";
import Link from "next/link";
import Button from "../common/button";
import Title from "../common/title";


export default function Main() {
    return (
      <div className="px-fluid min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between" style={{backgroundImage: "url('/main.png')"}}>
        <header className="flex items-center justify-between" style={{paddingTop: "calc(36 * (1px + (100vw - 1530px) / 1530))"}}>
          <div className="inline-block">
            <Link href={"/"} className="flex items-center">
                <div>
                <Image 
                    src={"/logos/nex-full.svg"}
                    alt="logo"
                    width={0}
                    height={0}
                    style={{
                      width: "calc(179 * (1px + (100vw - 1530px) / 1530))",
                      height: "calc(47 * (1px + (100vw - 1530px) / 1530))"
                    }}
                />
                </div>
            </Link>
          </div>
          <div className="text-fluid font-semibold" style={{['--fluid-font-size' as any]: 16, paddingLeft: 'calc(80 * (1px + (100vw - 1530px) / 1530))', lineHeight: 'calc(32 * (1px + (100vw - 1530px) / 1530))'}}>
            <Link href={"/"} style={{marginRight: 'calc(48 * (1px + (100vw - 1530px) / 1530))'}}>Все услуги</Link>
            <Link href={"/"} style={{marginRight: 'calc(48 * (1px + (100vw - 1530px) / 1530))'}}>Лицензии</Link>
            <Link href={"/"} style={{marginRight: 'calc(48 * (1px + (100vw - 1530px) / 1530))'}}>О компании</Link>
            <Link href={"/"}>Контакты</Link>
          </div>
          <div className="flex items-center" style={{marginRight: 'calc(-60 * (1px + (100vw - 1530px) / 1530))'}}>
            <div style={{backdropFilter: 'blur(50px)', background: 'rgba(255, 255, 255, 0.15)', marginRight: 'calc(4 * (1px + (100vw - 1530px) / 1530))', borderRadius: "calc(10 * (1px + (100vw - 1530px) / 1530))" }}>
                <Link href={"/"} className="w-full h-full inline-block font-semibold opacity-85 text-fluid" style={{['--fluid-font-size' as any]: 14, padding: "calc(10 * (1px + (100vw - 1530px) / 1530))"}}>RU</Link>
            </div>
            <div style={{border: '1px solid rgba(164, 164, 164, 0.29)', borderRadius: "calc(10 * (1px + (100vw - 1530px) / 1530))"}}>
                <Link href={"/"} className="w-full h-full inline-block text-fluid font-semibold opacity-85" style={{['--fluid-font-size' as any]: 14, padding: 'calc(10 * (1px + (100vw - 1530px) / 1530))'}}>UZ</Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-right flex flex-col" style={{marginRight: "calc(32 * (1px + (100vw - 1530px) / 1530))"}}>
                <Link href={"tel:+998 90 333-77-39"} className="text-fluid font-semibold" style={{lineHeight: 'calc(16 * (1px + (100vw - 1530px) / 1530))'}}>+998 90 333-77-39</Link>
                <Link href={"tel:+998 90 333-77-39"} className="opacity-50 underline" style={{lineHeight: 'calc(16 * (1px + (100vw - 1530px) / 1530))', fontSize: 'calc(13 * (1px + (100vw - 1530px) / 1530))'}}>Заказать звонок</Link>
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

        <div>
            <div className="main-title">
                <Title 
                    title="Помогаем бизнесу стать сильнее" 
                    title2="с помощью цифровых решений" 
                    subtitle="Умная автоматизация бизнеса"
                    isMain={true}
                    icon="/icons/nombus.svg"
                />
                <div className="flex items-center" style={{marginTop: "calc(46 * (1px + (100vw - 1530px) / 1530))"}}>
                    <div style={{marginRight: "calc(11 * (1px + (100vw - 1530px) / 1530))"}}>
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