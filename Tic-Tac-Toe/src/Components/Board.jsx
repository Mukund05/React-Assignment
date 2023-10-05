import { useState, useEffect } from "react";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState(() => {

    const storedScores = JSON.parse(
      localStorage.getItem("Scores")
    ) || { red: 0, blue: 0 };
    return storedScores;
  });

  useEffect(() => {
    localStorage.setItem("Scores", JSON.stringify(scores));
  }, [scores]);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const isBoardFull = (squares) => squares.every((square) => square);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);

    const winner = calculateWinner(newSquares);
    if (winner) {
      setScores((prevScores) => ({
        ...prevScores,
        red: winner === "X" ? prevScores.red + 1 : prevScores.red,
        blue: winner === "O" ? prevScores.blue + 1 : prevScores.blue,
      }));
      setSquares(Array(9).fill(null));
      setXIsNext(true);
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const handleNewGame = () => {
    setSquares(Array(9).fill(null));
    setScores({ red: 0, blue: 0 });
    setXIsNext(true);
  };
  const handleResetBoard = () => {
    setSquares(Array(9).fill(null));
  };

  const renderSquare = (i) => (
    <button
      className={`square ${
        squares[i] === "X" ? "x" : squares[i] === "O" ? "o" : ""
      }`}
      onClick={() => handleClick(i)}
    >
      {squares[i]}
    </button>
  );

  const winner = calculateWinner(squares);
  const isDraw = isBoardFull(squares) && !winner;
  const status = isDraw
    ? "It's a draw!"
    : winner
    ? ''
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="board">
      <div className="scores">
        <div className="score">Red: {scores.red}</div>
        <div className="score">Blue: {scores.blue}</div>
      </div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="button">
        <button className="reset-board-button" onClick={handleResetBoard}>
          Reset Board
        </button>
        <button className="new-game-button" onClick={handleNewGame}>
          New Game
        </button>
      </div>
    </div>
  );
};

function App() {
  return <Board />;
}

export default App;
