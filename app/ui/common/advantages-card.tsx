import Image from 'next/image';

export default function AdvantagesCard({iconPath, text, title, subtitle}: {iconPath: string, text: string, title: string, subtitle: string}) {
    return (
        <div className="p-9 rounded-[1.25rem]" style={{background: 'linear-gradient(96.32deg, rgba(64, 64, 64, 0.26) 0%, rgba(89, 89, 89, 0.26) 100%)'}}>
            <div className="w-full">
                <div className="flex items-center mb-9">
                    <div>
                        <div className='rounded-full bg-white p-6'>
                            <Image src={iconPath} alt={"Icon"} width={24} height={24}/>
                        </div>
                    </div>
                    <div className="pl-7">
                        <p className="font-semibold leading-8" style={{fontSize: "clamp(1.25rem, 1vw, 2.5rem)"}}>{title}</p>
                        <p className="text-[#6A6A6A] leading-5 font-semibold">{subtitle}</p>
                    </div>
                </div>
                <div className="leading-6 font-[600] text-fluid border-t text-[#B9B9B9] pt-[2.1875rem]" style={{borderColor: 'rgba(255, 255, 255, 0.15)'}}>
                    <p style={{maxWidth: 'clamp(37.75rem, 37.75rem + 1vw, 60rem)'}}>{text}</p>
                </div>
            </div>
        </div>
    )
}