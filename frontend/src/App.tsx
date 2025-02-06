// App.js

import "./App.css";

import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

function App() {
  const [game, setGame] = useState(new Chess());
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [highlightedSquares, setHighlightedSquares] = useState({});
  const [selectedSquare, setSelectedSquare] = useState(null); 
  // Let's perform a function on the game state
  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  // Movement of computer
  function makeRandomMove() {
    const possibleMove = game.moves();

    // exit if the game is over
    if (game.game_over() || game.in_draw() || possibleMove.length === 0) {
      setGameOver(true);
      const winner = game.turn() === 'w' ? 'Black' : 'White';
      setWinner(winner);
      return;
    }

    // select random move
    const randomIndex = Math.floor(Math.random() * possibleMove.length);
    // play random move
    safeGameMutate((game) => {
      game.move(possibleMove[randomIndex]);
    });
  }

  // Perform an action when a piece is dropped by a user
  function onDrop(source, target) {
    if (gameOver) return false;

    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: source,
        to: target,
        promotion: 'q',
      });
    });
    // illegal move
    if (move === null) return false;
    setHighlightedSquares({}); // Remove highlights after the move
    // valid move
    setTimeout(makeRandomMove, 200);
    return true;
  }

  // Reset the game
  function restartGame() {
    setGame(new Chess());
    setGameOver(false);
    setWinner(null);
    setHighlightedSquares({});
  }

  // Listen for Enter key press to restart the game
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Enter') {
        restartGame();
      }
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  function onPieceClick(square) {
    if (selectedSquare) {
      // If a square is selected, try to move the piece
      const move = game.move({
        from: selectedSquare,
        to: square,
        promotion: 'q', // Automatically promote pawns to queens
      });

      if (move === null) return; // Invalid move

      // If the move is valid, reset selectedSquare and remove highlights
      setSelectedSquare(null);
      setHighlightedSquares({});
      setTimeout(makeRandomMove, 200); // Trigger the computer's move
    } else {
      // If no square is selected, select this one
      const moves = game.moves({ square, verbose: true });
      const squares = moves.map((move) => move.to);
      
      // Highlight possible moves
      const newHighlightStyles = {};
      squares.forEach((square) => {
        newHighlightStyles[square] = { backgroundColor: 'rgba(0, 255, 0, 0.5)' };
      });
      setHighlightedSquares(newHighlightStyles);
      setSelectedSquare(square); // Track the selected square
    }

  }
  return (
    <div className="app">
      <div className="header">
        Chess
        <div className="game-info">
          <h1>GeeksforGeeks Chess Game</h1>
        </div>
      </div>
      <div className="chessboard-container">
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

export default App;
