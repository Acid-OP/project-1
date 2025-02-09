import pawn from "../Icons/pawn.png";
import { CardComponentItems } from "./CardComponentItems";
import thunder from "../Icons/thunder.png";
import goldmedal from "../Icons/goldmedal.png";
import handshake from "../Icons/handshake.png";
import robot from "../Icons/robot.png";
import link from "../Icons/link.png";
import motarboard from "../Icons/mortarboard.png";



import { CardIcon , CardText } from "./CardComponentItems";
export function CardComponent() {
    return (
        <div className="h-[900px] w-[602px] bg-[#262522] rounded-lg m-4 relative overflow-hidden">
            {/* Top curved section */}
            <div className="w-full h-[200px] bg-[#21201d] top-0 left-0 text-white text-4xl font-black flex items-center justify-center relative"
                 style={{ clipPath: "ellipse(100% 80% at 50% 0%)" }}>
                
                {/* Move text higher using absolute positioning */}
                <div className="absolute top-[30px]">Play Chess</div>
            </div>

            {/* Icon remains at top-[100px] */}
            <div className="absolute top-[98px] left-1/2 transform -translate-x-1/2">
                <img src={pawn} alt="Icon" width="100" height="100" className="drop-shadow-lg" />
            </div>
            <div className="flex flex-col p-6 ">
                 <CardComponentItems
    starticon={<CardIcon src={thunder} alt="Sample Icon" />}
    text={<CardText text="Play Online" text2="Play vs a person of similar skill" />}
    onClick={() => console.log("Button clicked")}/>
    <CardComponentItems
    starticon={<CardIcon src={robot} alt="Sample Icon" />}
    text={<CardText text="Play Bots" text2="Challenge a bot from Easy to Master" />}
    onClick={() => console.log("Button clicked")}/><CardComponentItems
    starticon={<CardIcon src={handshake} alt="Sample Icon" />}
    text={<CardText text="Play a Friend" text2="Invite a friend to a game of chess" />}
    onClick={() => console.log("Button clicked")}/><CardComponentItems
    starticon={<CardIcon src={goldmedal} alt="Sample Icon" />}
    text={<CardText text="Tournaments" text2="Join an Arena where anyone can win" />}
    onClick={() => console.log("Button clicked")}/>
    <CardComponentItems
    starticon={<CardIcon src={link} alt="Sample Icon" />}
    text={<CardText text="Socials" text2="Connect with me" />}
    onClick={() => console.log("Button clicked")}/>
    </div>
            
        </div>
    );
}
