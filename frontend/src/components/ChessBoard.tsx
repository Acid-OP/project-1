import { Chessboard } from "react-chessboard";
import { PlayerIcon1 } from "./PlayerIcon1";
import { PlayerIcon2 } from "./PlayerIcon2";
export function ChessBoard(){
    return (
        <div className="flex flex-col">
            <div className="flex justify-start pb-8">
            <PlayerIcon1/>
            </div>
            <Chessboard/>
            <div className="flex justify-start pt-8">
            <PlayerIcon2/>
            </div>
        </div>
    )
}