import Image from 'next/image';

export default function AdvantagesCard({iconPath, text, title, subtitle}: {iconPath: string, text: string, title: string, subtitle: string}) {
    return (
        <div style={{background: 'linear-gradient(96.32deg, rgba(64, 64, 64, 0.26) 0%, rgba(89, 89, 89, 0.26) 100%)', padding: "calc(36 * (1px + (100vw - 1530px) / 1530))", borderRadius: "calc(20 * (1px + (100vw - 1530px) / 1530))"}}>
            <div className="w-full">
                <div className="flex items-center" style={{marginBottom: "calc(36 * (1px + (100vw - 1530px) / 1530))"}}>
                    <div>
                        <div className='rounded-full bg-white' style={{padding: "calc(24 * (1px + (100vw - 1530px) / 1530))"}}>
                            <Image src={iconPath} alt={"Icon"} width={0} height={0} style={{
                                width: "calc(24 * (1px + (100vw - 1530px) / 1530))",
                                height: "calc(24 * (1px + (100vw - 1530px) / 1530))"
                            }}/>
                        </div>
                    </div>
                    <div style={{paddingLeft: "calc(28 * (1px + (100vw - 1530px) / 1530))"}}>
                        <p className="font-semibold" style={{fontSize: "calc(20 * (1px + (100vw - 1530px) / 1530))", lineHeight: "calc(32 * (1px + (100vw - 1530px) / 1530))"}}>{title}</p>
                        <p className="text-[#6A6A6A] font-semibold" style={{lineHeight: "calc(20 * (1px + (100vw - 1530px) / 1530))", fontSize: "calc(14 * (1px + (100vw - 1530px) / 1530))"}}>{subtitle}</p>
                    </div>
                </div>
                <div className="font-semibold text-fluid border-t text-[#B9B9B9]" style={{borderColor: 'rgba(255, 255, 255, 0.15)', paddingTop: "calc(35 * (1px + (100vw - 1530px) / 1530))", lineHeight: "calc(24 * (1px + (100vw - 1530px) / 1530))"}}>
                    <p style={{maxWidth: 'calc(604 * (1px + (100vw - 1530px) / 1530))'}}>{text}</p>
                </div>
            </div>
        </div>
    )
}