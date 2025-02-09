import { Chessboard } from "react-chessboard";
import { PlayerIcon , Icon ,Playername } from "./PlayerIcon";
import icon from "../Icons/icon.png";


export function ChessBoard(){
    return (
        <div className="flex flex-col">
            <div className="flex justify-start pb-6">
            <PlayerIcon startIcon={<Icon src={icon} />} playername={<Playername text="Opponent" />} variant="opponent"/>
            
            </div>
            <Chessboard/>
            <div className="flex justify-start pt-6">
    <PlayerIcon startIcon={<Icon src={icon} />} playername={<Playername text="Player1" />} variant="player"/>
            
            </div>
        </div>
    )
}