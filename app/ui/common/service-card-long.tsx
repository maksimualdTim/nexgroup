import Image from "next/image";
import Link from "next/link";
interface ServiceCardLongProps {
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
export default function ServiceCardLong({order, title, text, image, logo, link, period, logoWidth, logoHeight} : ServiceCardLongProps) {
    return (
        <Link href={link} className="w-full p-12 max-h-[27.25rem] bg-cover bg-center bg-no-repeat rounded-[1.25rem] inline-block" style={{backgroundImage: `url('${image}')`}}>
            <div className="flex justify-between items-center mb-40">
                <div className="rounded-[6.25rem] py-3 px-6 inline-block" style={{backgroundColor: "rgba(217, 217, 217, 0.2)", backdropFilter: "blur(20px)"}}>{period}</div>
                <div>
                    <Image 
                    src={logo}
                    alt="logo"
                    width={logoWidth}
                    height={logoHeight}
                    />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="max-w-[30.5rem]">
                    <div className="font-semibold text-fluid leading-5 opacity-50">0{order}</div>
                    <h4 className="font-semibold text-[2rem] leading-5 mt-5 mb-8">{title}</h4>
                    <div className="opacity-50 font-semibold leading-6 text-fluid">{text}</div>
                </div>
                <div className="p-12 bg-white rounded-full">
                    <div>
                        <Image 
                        src={"/icons/arrow-right.svg"}
                        alt="arrow"
                        width={13}
                        height={13}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}