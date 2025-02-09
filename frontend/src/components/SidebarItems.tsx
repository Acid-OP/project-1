import { ReactElement } from "react"

export interface sidebaritems {
    startIcon : ReactElement;
    title : ReactElement;
    onClick?: () => void;
}

export function SidebarItems(props : sidebaritems) {
    return(
<div className="flex flex-col">
    <div className="flex items-center justify-center pr-8 ">
        {props.startIcon}
        <span className=" self-start text-white">{props.title}</span>
    </div>
</div>

    )
}


export function IconComponent({ src, alt }: { src: string; alt?: string }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className=" h-17 w-17 rounded-sm flex justify-center items-center">
                <img src={src} alt={alt || "Icon"} width="45" height="45" />
            </div>
        </div>
    );
}

export function TextComponent({ text }: { text: string }) {
    return (
        <div className="flex">
            <span className="text-white text-xl font-bold pt-3">{text}</span>
        </div>
    );
}
