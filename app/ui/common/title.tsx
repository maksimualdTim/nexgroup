export default function Title({title, subtitle, title2, isMain = false}: {title: string, subtitle: string, title2: string, isMain?: boolean}) {
    return (
        <>
            <div className="subtitle text-subtitle leading-5 mb-6 font-semibold"><span className="opacity-50">{subtitle}</span></div>
            {isMain ?  (
                            <h1 className="title leading-title font-bold text-title">{title} <span className="block opacity-50">{title2}</span></h1>
            ) : (
                <h3 className="title leading-title font-bold text-title">{title} <span className="block opacity-50">{title2}</span></h3>

            )}
        </>
    )
}