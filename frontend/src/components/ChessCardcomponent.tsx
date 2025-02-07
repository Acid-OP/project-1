import { Chessboard } from "react-chessboard";
import { PlayerIcon1 } from "./PlayerIcon1";
import { PlayerIcon2 } from "./PlayerIcon2";


export function ChessCardcomponent() {
    return(
        <div>
            <div className="flex flex-col justify-center items-center ">
                <PlayerIcon1/>
                <Chessboard/>
                <PlayerIcon2/>

            </div>
        </div>
    )
}