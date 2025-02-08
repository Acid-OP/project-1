import mvp from "../Icons/mvp.png"

export function Sidebar(){
    return(
        <div className="h-screen bg-[#262522] w-50 fixed left-0 top-0 pl-6 flex flex-col  items-center pr-16">
            <div className="flex justify-start p-4 pr-8">
           <img src={mvp} alt="pawn" className="filter brightness-50 invert sepia saturate-[600%] hue-rotate-[25deg] contrast-[60%]" />
           <span className="text-white text-2xl font-bold ml-[-16px] pt-1">ChessMate</span>
            </div>
        </div>
    )
}