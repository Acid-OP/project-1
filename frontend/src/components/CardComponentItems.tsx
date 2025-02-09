import { ReactElement } from "react";

export interface CardComponentitems {
    starticon: ReactElement;
    text: ReactElement;
    onClick?: () => void;
}

export function CardComponentItems(props: CardComponentitems) {
    return (
        <div className="pb-1">
        <button onClick={props.onClick} className="flex items-center h-28 w-[29vw] rounded-b-lg bg-[#1e1e1b] p-6">
            {props.starticon}
            {props.text}
        </button>
        </div>
    );
}

export function CardIcon ({src , alt }: {src:string , alt?:string}) {
    return(<div className="flex items-center pt-4">
        <img src={src} alt={alt || "Icon"} width="75" height="75" />
    </div>

    )
}

export function CardText({ text , text2 }: { text: string , text2:string }) {
    return(
        <div className="flex flex-col items-start text-white p-6">
            <div className="text-3xl font-bold">{text}</div>
            <div className="font-light text-lg">{text2}</div>
        </div>
    )
}
