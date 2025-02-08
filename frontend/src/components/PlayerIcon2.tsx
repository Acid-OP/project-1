import icon from "../Icons/icon.png"
import icon2 from "../Icons/icon2.png"

export function PlayerIcon2() {
    return(
        <div className="flex flex-col justify-center items-center ">
        <div className="bg-[#bebdb9] h-17 w-17 rounded-sm flex justify-center items-center">
            <div className="flex justify-center items-center h-max w-max pl-2">
            <img src={icon} alt="Icon" width="90" height="90" />
            </div>
        </div>
        
        </div>
    )
}