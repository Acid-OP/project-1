import { ReactElement } from "react"

interface Playericon {
    startIcon : ReactElement;
    playername : ReactElement;
    variant : "player" | "opponent";
}

const variantClasses = {
    player : "bg-[#bebdb9]",
    opponent : "bg-[#4b4847]"
}


export function PlayerIcon({ startIcon, playername, variant }: Playericon) {
    return(
        <div className="flex ">
        <div className={`p-2 rounded-lg flex items-center ${variantClasses[variant]}`}>
            {startIcon}
        </div>
            <span className="ml-4">{playername}</span>
        </div>

    )
}

export function Icon({src , alt}:{src:string ; alt?:string}){
    return (
    <div className="h-15 w-15 rounded-sm flex justify-center pl-2  items-center">
        <img src={src} alt={alt || "Icon"} width="85" height="85"/>
    </div>
    )

}

export function Playername({text}:{text:string}){
    return(
        <div>
            <span className="text-white font-medium text-lg ">{text}</span>
        </div>
    )   
}