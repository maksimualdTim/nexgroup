import Link from "next/link";
import Image from "next/image";

export default function Button({link, isFull, text, withArrow = false}: {link: string, isFull: boolean, text: string, withArrow?: boolean}) {
    if(isFull) {
        return (
            <Link href={link} className="bg-white inline-block text-[#0E0E0E] text-fluid font-semibold" 
            style={{
                ["--fluid-fint-size" as any]: 15,
                paddingTop: "calc(17.5 * (1px + (100vw - 1530px) / 1530))", 
                paddingBottom: "calc(17.5 * (1px + (100vw - 1530px) / 1530))", 
                paddingRight: "calc(40 * (1px + (100vw - 1530px) / 1530))",
                paddingLeft: "calc(40 * (1px + (100vw - 1530px) / 1530))",
                borderRadius: "calc(100 * (1px + (100vw - 1530px) / 1530))"
            }}>
                {text}
                {withArrow && (
                    <Image src={"/icons/arrow-right-btn.svg"} alt="arrow" width={0} height={0} className="inline" style={{
                        width: "calc(11 * (1px + (100vw - 1530px) / 1530))",
                        height: "calc(11 * (1px + (100vw - 1530px) / 1530))",
                        marginLeft: "calc(11 * (1px + (100vw - 1530px) / 1530))"
                    }}/>
                )} 
            </Link>
        )
    }

    return (
        <Link href={link} className="border font-semibold text-fluid" style={{
            borderColor: "#404040",
            paddingTop: "calc(17.5 * (1px + (100vw - 1530px) / 1530))", 
            paddingBottom: "calc(17.5 * (1px + (100vw - 1530px) / 1530))", 
            paddingRight: "calc(40 * (1px + (100vw - 1530px) / 1530))",
            paddingLeft: "calc(40 * (1px + (100vw - 1530px) / 1530))",
            borderRadius: "calc(100 * (1px + (100vw - 1530px) / 1530))"
        }}>{text}</Link>
    )
}