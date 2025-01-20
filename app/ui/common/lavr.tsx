import Image from "next/image";

export default function Lavr() {
    return (
        <div className="flex items-center" style={{
            marginRight: "calc(-29 * (1px + (100vw - 1530px) / 1530))",
            marginBottom: "calc(-29 * (1px + (100vw - 1530px) / 1530))"
        }}>
            <Image src={"/icons/lavr-left.svg"} alt="lavr" width={87} height={116} style={{
                width: "calc(87 * (1px + (100vw - 1530px) / 1530))",
                height: "calc(116 * (1px + (100vw - 1530px) / 1530))"
            }}></Image>
            <span className="text-center inline-block font-semibold" style={{maxWidth: "calc(201 * (1px + (100vw - 1530px) / 1530))", fontSize: "calc(13 * (1px + (100vw - 1530px) / 1530))", lineHeight: "calc(19 * (1px + (100vw - 1530px) / 1530));"}}>Сертифицированный интегратор в Узбекистане</span>
            <Image src={"/icons/lavr-right.svg"} alt="lavr" width={87} height={116} style={{
                width: "calc(87 * (1px + (100vw - 1530px) / 1530))",
                height: "calc(116 * (1px + (100vw - 1530px) / 1530))"
            }}></Image>
        </div>
    )
}