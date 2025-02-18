import { useState  , useEffect} from "react";
import { Chessboard, Square } from "react-chessboard";
import { Chess, Move } from 'chess.js';

export function Game() {
  const [game, setGame] = useState(new Chess());
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<String | null>(null);
  const [selectedSquare , setSelectedSquare] = useState<Square | null>(null);
const [highlightedSquares, setHighlightedSquares] = useState<Partial<Record<Square, { backgroundColor: string }>>>({});
  

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

  function safegame(modify: (game: InstanceType<typeof Chess>) => void) {
    setGame((g: InstanceType<typeof Chess>) => {
      const update = new Chess(g.fen());
      modify(update);
      return update;
    });
  }

  function makeRandomMove() {
    const possibleMove = game.moves();

    if (game.game_over() || game.in_draw() || possibleMove.length === 0) {
      setGameOver(true);
      const Winner: String = game.turn() === 'w' ? 'Black' : 'White';
      setWinner(Winner);
      return;
    }

    const randomIndex = Math.floor(Math.random() * possibleMove.length);

    safegame((game) => {
      game.move(possibleMove[randomIndex]);
    });
  }

  function onDrop(source: Square, target: Square): boolean {
    if (gameOver) return false;

    let move: Move | null = null;
    safegame((game) => {
      move = game.move({
        from: source,
        to: target,
        promotion: "q",
      });
    });

    if (move == null) return false;
    setHighlightedSquares({});
    setTimeout(makeRandomMove, 200);
    return true;
  }

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
    <div>
      <div>
        <Chessboard position={game.fen()} onPieceDrop={onDrop} onSquareClick={onPieceClick} customSquareStyles={highlightedSquares}/>
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
