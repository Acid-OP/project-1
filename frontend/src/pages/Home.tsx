import { useState } from "react";
import classNames from "classnames";
import { initialBoard } from "../components/pieces";

type Piece = string | null;
type Position = [number , number];
export function Home() {
  const [chessBoard, setChessBoard] = useState<Array<Array<null | string>>>(initialBoard);
  function handlePieceClick(piece: Piece , position: Position ) {
    const [row,col] = position;
    const square = String.fromCharCode(97 + col) + (8 - row);

    return (
  
    )
  }
  return (
    
      <div className="flex h-screen justify-center items-center bg-black">
        <div className="border-1 border-white">
          {chessBoard.map((row, rIndex) => (
            <div className="flex" key={rIndex}>
              {row.map((piece, cIndex) => (
                <div
                  className={classNames('w-12 h-12 flex items-center justify-center', {
                    "bg-[#8B4513]": (rIndex + cIndex) % 2 === 0,
                    "bg-white": (rIndex + cIndex) % 2 !== 0,
                  })}
                  key={cIndex}
                  onClick={() => handlePieceClick(piece, [rIndex, cIndex])}
                >
                  {piece && <img src={`/images/chess/${piece}.svg`} alt={piece} className="w-8 h-8" />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    
  );
}