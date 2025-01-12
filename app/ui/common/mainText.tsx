import { JSX } from "react"

export default function MainText({order, text}: {order: number, text: JSX.Element[]}) {
    const spans = []
    for (let i = 0; i < order; i++) {
        spans.push(
            <span key={i} className="bg-accent rounded-full inline-block relative top-[-2]" style={{width: '0.5rem', height: '0.5rem', marginLeft:'3px', marginRight: '3px'}}></span>
        )
    }
    return (
        <div className="advantages-text max-w-[30rem]">
            <div className="text-accent mb-fluid">
                <span>/ </span>
                {spans}
                <span> /</span>
            </div>
            <div className="opacity-70 leading-6">
                {text}
            </div>
        </div>
    )
}