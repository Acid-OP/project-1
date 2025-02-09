import "./Home.css";
import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

type Square = `${"a" | "b" | "c" | "d" | "e" | "f" | "g" | "h"}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`;
type Move = {
  from: Square;
  to: Square;
  promotion?: string;
};

export function Home() {
  const [game, setGame] = useState<InstanceType<typeof Chess>>(new Chess());
  const [winner, setWinner] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [highlightedSquares, setHighlightedSquares] = useState<Partial<Record<Square, { backgroundColor: string }>>>({});
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);

  function safeGameMutate(modify: (game: InstanceType<typeof Chess>) => void) {
    setGame((g) => {
      const update = new Chess(g.fen());
      modify(update);
      return update;
    });
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0) {
      setGameOver(true);
      setWinner(game.turn() === "w" ? "Black" : "White");
      return;
    }
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    safeGameMutate((game) => {
      game.move(possibleMoves[randomIndex]);
    });
  }

  function onDrop(source: Square, target: Square): boolean {
    if (gameOver) return false;

    let move: Move | null = null;
    safeGameMutate((game) => {
      move = game.move({ from: source, to: target, promotion: "q" });
    });

    if (!move) return false;
    setHighlightedSquares({});
    setTimeout(makeRandomMove, 200);
    return true;
  }

  function restartGame() {
    setGame(new Chess());
    setGameOver(false);
    setWinner(null);
    setHighlightedSquares({});
  }

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "Enter") {
        restartGame();
      }
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  function onPieceClick(square: Square) {
    if (selectedSquare) {
      const move = game.move({
        from: selectedSquare,
        to: square,
        promotion: "q",
      });
      if (!move) return;
      setSelectedSquare(null);
      setHighlightedSquares({});
      setTimeout(makeRandomMove, 200);
    } else {
      const moves = game.moves({ square, verbose: true }) as Move[];
      const squares = moves.map((move) => move.to);
      const newHighlightStyles: Partial<Record<Square, { backgroundColor: string }>> = {};
      squares.forEach((sq) => {
        newHighlightStyles[sq] = { backgroundColor: "rgba(0, 255, 0, 0.5)" };
      });
      setHighlightedSquares(newHighlightStyles);
      setSelectedSquare(square);
    }
  }

  return (
    <div className="app">
      <div className="chessboard-container">
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          onSquareClick={onPieceClick}
          customSquareStyles={highlightedSquares}
        />
        {gameOver && (
          <div className="game-over">
            <p>Game Over</p>
            <p>Winner: {winner}</p>
            <p>Press Enter to restart</p>
          </div>
        )}
      </div>
    </div>
  );
}
