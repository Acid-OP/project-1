import mvp from "../Icons/mvp.png"
import { SidebarItems } from "./SidebarItems"
import { IconComponent } from "./SidebarItems"
import sidebarIcon1 from "../Icons/sidebarIcon1.png"
import binoculars from "../Icons/binoculars.png"
import newspaper from "../Icons/newspaper.png"
import care from "../Icons/care.png"
import motarboard from "../Icons/mortarboard.png";
import puzzle from "../Icons/puzzle.png";
import { TextComponent } from "./SidebarItems"


export function Sidebar(){
    return(
        <div className="h-screen bg-[#262522] w-50 fixed left-0 top-0 pl-6 flex flex-col  items-center pr-16">
            <div className="flex justify-start p-4 pr-8">
           <img src={mvp} alt="pawn" className="filter brightness-50 invert sepia saturate-[600%] hue-rotate-[25deg] contrast-[60%]" />
           <span className="text-white text-2xl font-bold ml-[-16px] pt-1">ChessMate</span>
            </div>
            <div className="mr">
            <SidebarItems startIcon={<IconComponent src={sidebarIcon1} />} title={<TextComponent text="Play"/>}/>
            <SidebarItems startIcon={<IconComponent src={puzzle} />} title={<TextComponent text="Quiz"/>}/>
            <SidebarItems startIcon={<IconComponent src={motarboard} />} title={<TextComponent text="Learn"/>}/>
            <SidebarItems startIcon={<IconComponent src={binoculars} />} title={<TextComponent text="Watch"/>}/>
            <SidebarItems startIcon={<IconComponent src={newspaper} />} title={<TextComponent text="News"/>}/>
            <SidebarItems startIcon={<IconComponent src={care} />} title={<TextComponent text="Social"/>}/>
            </div>
        
        </div>
    )
}