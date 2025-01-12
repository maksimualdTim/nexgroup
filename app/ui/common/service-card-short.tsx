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
        <Link href={link} className="w-full max-h-[27.25rem] p-12 bg-cover bg-center bg-no-repeat rounded-[1.25rem] inline-block" style={{backgroundImage: `url('${image}'), linear-gradient(180deg, #1E1E1E 0%, #373737 100%)`}}>
            <div className="flex justify-between mb-14">
                <div className="max-w-[19.5rem]">
                    <div className="font-semibold text-fluid leading-5 opacity-50">0{order}</div>
                    <h4 className="font-semibold text-[1.5rem] leading-8 mt-5 mb-8 max-w-[14.5rem]">{title}</h4>
                    <div className="opacity-50 font-semibold leading-6 text-fluid">{text}</div>
                </div>
                <div>
                    <Image 
                    src={logo}
                    alt="logo"
                    width={logoWidth}
                    height={logoHeight}
                    />
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div className="rounded-[6.25rem] py-3 px-6 inline-block" style={{backgroundColor: "rgba(217, 217, 217, 0.2)", backdropFilter: "blur(20px)"}}>{period}</div>
                <div className="p-12 border rounded-full">
                    <div>
                        <Image 
                        src={"/icons/arrow-right-light.svg"}
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