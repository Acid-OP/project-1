import { CardComponent } from "./CardComponent";
import { ChessBoard } from "./ChessBoard";

export function ChessCardcomponent() {
    return(
        <div>
            <div className="flex justify-evenly h-screen items-center bg-[#302e2b] ">
                <ChessBoard/>
                <CardComponent/>

            </div>
        </div>
    )
}