import { ReactElement } from "react"

export interface Socials {
    startIcon : ReactElement;
    onClick ?: ()=> void;
}
export function CardComponentSocials(props:Socials) {
    return(
        <div className="flex pl-3">
            {props.startIcon}
        </div>
    )
}

export function SocialIcon({ src, alt }: { src: string; alt?: string }) {
    return (
        <div className="">
                <img src={src} alt={alt || "Icon"}  width="45" height="45" />
            </div>
    );
}

