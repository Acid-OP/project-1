import { useEffect, useState } from "react";
import classNames from "classnames";

export function Home() {
  const n = 8;
  const m = 8;

  const initialBoard = [
    ["r", "n", "b", "q", "k", "b", "n", "r"], // Black pieces
    ["p", "p", "p", "p", "p", "p", "p", "p"], // Black pawns
    [null, null, null, null, null, null, null, null], // Empty rows
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["P", "P", "P", "P", "P", "P", "P", "P"], // White pawns
    ["R", "N", "B", "Q", "K", "B", "N", "R"], // White pieces
  ];

  const [chessBoard, setChessBoard] = useState<Array<Array<null | string>>>(initialBoard);

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="border-4 border-solid border-black">
          {/* Render the chessboard */}
          {chessBoard.map((row, rIndex) => (
            <div className="flex" key={rIndex}>
              {row.map((piece, cIndex) => (
                <div
                  className={classNames('w-12 h-12 flex items-center justify-center', {
                    "bg-black": (rIndex + cIndex) % 2 === 0,
                    "bg-white": (rIndex + cIndex) % 2 !== 0,
                  })}
                  key={cIndex}
                >
                  {piece && <span>{piece}</span>} {/* Display the piece here */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
