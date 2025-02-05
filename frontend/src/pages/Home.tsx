import { useState } from "react";
import classNames from "classnames";
import { initialBoard } from "../components/pieces";
export function Home() {
  const [chessBoard, setChessBoard] = useState<Array<Array<null | string>>>(initialBoard);

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-black">
        <div className="border-1 border-white">
          {/* Render the chessboard */}
          {chessBoard.map((row, rIndex) => (
            <div className="flex" key={rIndex}>
              {row.map((piece, cIndex) => (
                <div
                  className={classNames('w-12 h-12 flex items-center justify-center', {
                    "bg-[#8B4513]": (rIndex + cIndex) % 2 === 0,
                    "bg-white": (rIndex + cIndex) % 2 !== 0,
                  })}
                  key={cIndex}
                >
                  {piece && <img src={`/images/chess/${piece}.svg`} alt={piece} className="w-8 h-8" />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
