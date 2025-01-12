import Link from "next/link";
import Image from "next/image";

export default function Button({link, isFull, text, withArrow = false}: {link: string, isFull: boolean, text: string, withArrow?: boolean}) {
    if(isFull) {
        return (
            <Link href={link} className="py-6 px-10 bg-white rounded-[6.25rem] inline-block text-[#0E0E0E] text-fluid font-semibold">
                {text}
                {withArrow && (
                    <Image src={"/icons/arrow-right-btn.svg"} alt="arrow" width={11} height={11} className="inline ml-2"/>
                )} 
            </Link>
        )
    }

    return (
        <Link href={link} className="border rounded-[6.25rem] py-6 px-10 font-semibold text-fluid" style={{borderColor: "#404040"}}>{text}</Link>
    )
}