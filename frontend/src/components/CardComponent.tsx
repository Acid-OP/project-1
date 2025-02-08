import pawn from "../Icons/pawn.png";

export function CardComponent() {
    return (
        <div className="h-[900px] w-[600px] bg-[#262522] rounded-lg m-4 relative overflow-hidden">
            {/* Top curved section */}
            <div className="w-full h-[200px] bg-[#21201d] top-0 left-0 text-white text-4xl font-black flex items-center justify-center relative"
                 style={{ clipPath: "ellipse(100% 80% at 50% 0%)" }}>
                
                {/* Move text higher using absolute positioning */}
                <div className="absolute top-[30px]">Play Chess</div>
            </div>

            {/* Icon remains at top-[100px] */}
            <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2">
                <img src={pawn} alt="Icon" width="120" height="120" className="drop-shadow-lg" />
            </div>
        </div>
    );
}
