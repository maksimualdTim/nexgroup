import { JSX } from "react"

export default function MainText({order, text}: {order: number, text: JSX.Element[]}) {
    const spans = []
    for (let i = 0; i < order; i++) {
        spans.push(
            <span key={i} className="bg-accent rounded-full inline-block relative" style={{
                width: 'calc(8 * (1px + (100vw - 1530px) / 1530))', 
                height: 'calc(8 * (1px + (100vw - 1530px) / 1530))', 
                marginLeft:'calc(3 * (1px + (100vw - 1530px) / 1530))', 
                marginRight: 'calc(3 * (1px + (100vw - 1530px) / 1530))',
            }}></span>
        )
    }
    return (
        <div className="advantages-text" style={{maxWidth: "calc(446 * (1px + (100vw - 1530px) / 1530))"}}>
            <div className="text-accent mb-fluid">
                <span className="text-fluid">/ </span>
                {spans}
                <span className="text-fluid"> /</span>
            </div>
            <div className="opacity-70 text-fluid" style={{lineHeight: "calc(24 * (1px + (100vw - 1530px) / 1530))"}}>
                {text}
            </div>
        </div>
    )
}