import Image from 'next/image';
import s from "../common/css/AdvantagesCard.module.css";

export default function AdvantagesCard({iconPath, text, title, subtitle}: {iconPath: string, text: string, title: string, subtitle: string}) {
    return (
        <div className={s.card}>
            <div className="w-full">
                <div className={`flex items-center ${s.cardTop}`}>
                    <div>
                        <div className={`rounded-full bg-white ${s.iconContainer}`}>
                            <Image src={iconPath} alt={"Icon"} width={0} height={0} className={s.icon}/>
                        </div>
                    </div>
                    <div className={s.textWrapper}>
                        <p className={`font-semibold ${s.title}`}>{title}</p>
                        <p className={`text-[#6A6A6A] font-semibold ${s.subtitle}`}>{subtitle}</p>
                    </div>
                </div>
                <div className={`font-semibold text-fluid border-t text-[#B9B9B9] ${s.textContainer}`}>
                    <p className={s.text}>{text}</p>
                </div>
            </div>
        </div>
    )
}