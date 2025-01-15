import Image from "next/image";
import Link from "next/link";
interface ServiceCardShortProps {
    order: number, 
    title: string, 
    text: string, 
    image: string, 
    logo: string,
    logoWidth: number,
    logoHeight: number, 
    link: string, 
    period: string
}
export default function ServiceCardShort({order, title, text, image, logo, link, period, logoWidth, logoHeight} : ServiceCardShortProps) {
    return (
        <Link href={link} className="w-full bg-cover bg-center bg-no-repeat inline-block" style={{
            backgroundImage: `url('${image}'), linear-gradient(180deg, #1E1E1E 0%, #373737 100%)`,
            maxHeight: "calc(436 * (1px + (100vw - 1530px) / 1530))",
            padding: "calc(48 * (1px + (100vw - 1530px) / 1530))",
            borderRadius: "calc(20 * (1px + (100vw - 1530px) / 1530))"
            }}>
            <div className="flex justify-between" style={{marginBottom: "calc(56 * (1px + (100vw - 1530px) / 1530))"}}>
                <div style={{
                    maxWidth: "calc(312 * (1px + (100vw - 1530px) / 1530))"
                }}>
                    <div className="font-semibold text-fluid opacity-50" style={{lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))"}}>0{order}</div>
                    <h4 className="font-semibold" style={{
                        fontSize: "calc(24 * (1px + (100vw - 1530px) / 1530))", 
                        lineHeight: "calc(32 * (1px + (100vw - 1530px) / 1530))",
                        marginTop: "calc(20 * (1px + (100vw - 1530px) / 1530))",
                        marginBottom: "calc(32 * (1px + (100vw - 1530px) / 1530))",
                        maxWidth: "calc(232 * (1px + (100vw - 1530px) / 1530))"
                        }}>{title}</h4>
                    <div className="opacity-50 font-semibold text-fluid" style={{lineHeight: "calc(24 * (1px + (100vw - 1530px) / 1530))"}}>{text}</div>
                </div>
                <div>
                    <Image 
                    src={logo}
                    alt="logo"
                    width={0}
                    height={0}
                    style={{
                        width: `calc(${logoWidth} * (1px + (100vw - 1530px) / 1530))`,
                        height: `calc(${logoHeight} * (1px + (100vw - 1530px) / 1530))`
                    }}
                    />
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div className="inline-block" style={{
                    backgroundColor: "rgba(217, 217, 217, 0.2)", 
                    backdropFilter: "blur(20px)",
                    borderRadius: "calc(100 * (1px + (100vw - 1530px) / 1530))",
                    paddingBottom: "calc(12 * (1px + (100vw - 1530px) / 1530))",
                    paddingTop: "calc(12 * (1px + (100vw - 1530px) / 1530))",
                    paddingRight: "calc(24 * (1px + (100vw - 1530px) / 1530))",
                    paddingLeft: "calc(24 * (1px + (100vw - 1530px) / 1530))"
                    }}>{period}</div>
                <div className="border rounded-full" style={{padding: "calc(48 * (1px + (100vw - 1530px) / 1530))"}}>
                    <div>
                        <Image 
                        src={"/icons/arrow-right-light.svg"}
                        alt="arrow"
                        width={0}
                        height={0}
                        style={{
                            width: "calc(13 * (1px + (100vw - 1530px) / 1530))",
                            height: "calc(13 * (1px + (100vw - 1530px) / 1530))"
                        }}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}