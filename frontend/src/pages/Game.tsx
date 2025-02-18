import { useState } from "react";
import { Chessboard, Square } from "react-chessboard";
import { Chess, Move } from 'chess.js';

export function Game() {
  const [game, setGame] = useState(new Chess());
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<String | null>(null);

  function restartGame() {
    setGame(new Chess());
  }

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
    setTimeout(makeRandomMove, 200);
    return true;
  }

  return (
    <div>
      <div>
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      </div>
    </div>
  );
}
