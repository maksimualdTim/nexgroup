import Image from "next/image";
import s from "../common/css/ProblemCard.module.css";

export default function ProblemCard({icon, title, text, order, textWidth, className = ""}: {icon: string, title: string, text: string, order: string, textWidth: number, className?: string}) {
    return (
        <div className={`${className} ${s.card}`}>
            <div className="flex justify-between items-center" style={{
                    marginBottom: "calc(40 * (1px + (100vw - 1530px) / 1530))"
                }}>
                <div>
                    <Image
                    src={icon}
                    width={0}
                    alt="users"
                    height={0}
                    className={s.icon}
                    />
                </div>
                <div className={`opacity-50 font-semibold ${s.order}`}>{order}</div>
            </div>
            <div>
                <div className={`font-semibold flex justify-between ${s.title}`}>
                    {title}
                </div>
                <div className={`opacity-70 ${s.text}`} style={{
                    maxWidth: `calc(${textWidth} * (1px + (100vw - 1530px) / 1530))`
                }}>
                    {text}
                </div>
            </div>
        </div>  
    );
}