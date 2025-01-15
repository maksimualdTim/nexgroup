import Image from "next/image";

export default function Title({title, subtitle, title2, isMain = false, icon = ""}: {title: string, subtitle: string, title2: string, isMain?: boolean, icon?: string}) {
    let image = null;

    if(icon.length != 0) {
        image =                 <Image 
        src={icon}
        alt="logo"
        width={0}
        height={0}
        style={{
          display: "inline-block",
          width: "calc(14 * (1px + (100vw - 1530px) / 1530))",
          height: "calc(14 * (1px + (100vw - 1530px) / 1530))",
          marginRight: "calc(13 * (1px + (100vw - 1530px) / 1530))"
        }} />
    }

    return (
        <>
            <div className="subtitle text-fluid font-semibold" style={{marginBottom: "calc(24 * (1px + (100vw - 1530px) / 1530))"}}>{image}<span className="opacity-50" style={{lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))"}}>{subtitle}</span></div>
            {isMain ?  (
                            <h1 className="title leading-title font-bold text-title">{title} <span className="block opacity-50">{title2}</span></h1>
            ) : (
                <h3 className="title leading-title font-bold text-title">{title} <span className="block opacity-50">{title2}</span></h3>

            )}
        </>
    )
}