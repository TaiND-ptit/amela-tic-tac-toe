import React, { useState } from "react";
import "./Tictactoe.css";
const Tictactoe = () => {
  const [mark, setMark] = useState("x");
  const [winner, setWinner] = useState();
  const [cells, setCells] = useState(Array(9).fill(""));

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("Đã chọn rồi");
      return;
    }
    let squares = [...cells];

    if (mark === "x") {
      squares[num] = "x";
      setMark("o");
    } else {
      squares[num] = "o";
      setMark("x");
    }
    checkForWinner(squares);
    setCells(squares);
  };

  const handleRestart = (e) => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };
  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  return (
    <div className="container">
      <table>
        Đến lượt: {mark}
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <div>{winner} is the winner!!</div>
        </>
      )}
      <button
        onClick={() => {
          handleRestart();
        }}
      >
        Play Again
      </button>
    </div>
  );
};

export default Tictactoe;
