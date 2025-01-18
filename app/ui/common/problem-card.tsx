import Image from "next/image";

export default function ProblemCard({icon, title, text, order, textWidth, className = ""}: {icon: string, title: string, text: string, order: string, textWidth: number, className?: string}) {
    return (
        <div className={className} style={{
            padding: "calc(33 * (1px + (100vw - 1530px) / 1530))",
            paddingBottom: "calc(36 * (1px + (100vw - 1530px) / 1530))",
            width: "calc(482 * (1px + (100vw - 1530px) / 1530))",
            borderRadius: "calc(20 * (1px + (100vw - 1530px) / 1530))",
            border: "1px solid #FFFFFF12"
        }}>
            <div className="flex justify-between items-center" style={{
                    marginBottom: "calc(40 * (1px + (100vw - 1530px) / 1530))"
                }}>
                <div>
                    <Image
                    src={icon}
                    width={0}
                    alt="users"
                    height={0}
                    style={{
                        width: "calc(35 * (1px + (100vw - 1530px) / 1530))",
                        height: "calc(35 * (1px + (100vw - 1530px) / 1530))"
                    }}
                    />
                </div>
                <div className="opacity-50 font-semibold" style={{
                    fontSize: "calc(20 * (1px + (100vw - 1530px) / 1530))",
                    lineHeight: "calc(25 * (1px + (100vw - 1530px) / 1530))"
                }}>{order}</div>
            </div>
            <div>
                <div className="font-semibold flex justify-between" style={{
                    fontSize: "calc(18 * (1px + (100vw - 1530px) / 1530))",
                    lineHeight: "calc(25 * (1px + (100vw - 1530px) / 1530))",
                    marginBottom: "calc(12 * (1px + (100vw - 1530px) / 1530))"
                }}>
                    {title}
                </div>
                <div className="opacity-70" style={{
                    marginTop: "calc(12 * (1px + (100vw - 1530px) / 1530))",
                    fontSize: "calc(15 * (1px + (100vw - 1530px) / 1530))",
                    lineHeight: "calc(18 * (1px + (100vw - 1530px) / 1530))",
                    maxWidth: `calc(${textWidth} * (1px + (100vw - 1530px) / 1530))`
                }}>
                    {text}
                </div>
            </div>
        </div>  
    );
}