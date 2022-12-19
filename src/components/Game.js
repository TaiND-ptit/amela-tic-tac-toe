import React, { useState } from "react";
import "./Game.css";
import { useParams } from "react-router-dom";

const Game = () => {
  const { numberCell } = useParams();
  const [panel, setPanel] = useState(parseInt(numberCell, 10));
  let tmpArr = Array(panel);
  for (let i = 0; i < panel; i++) {
    tmpArr[i] = Array(panel).fill(null);
  }
  const [winner, setWinner] = useState();

  const [squares, setSquares] = useState(tmpArr);

  const [mark, setMark] = useState('x');
  console.log(squares)

  const handleClick = (col, row) => {
    // for(let i = 0; i < squares.length; i++) {
    //   for (let j = 0; j < squares.length; j++) {
    //     if(i === col && j === row){
    //        squares[col][row] = mark
    //        setMark('o');
    //     }    
    //   }
    // }
  }
 const Cell = ({col, row}) =>{
     return (
        <>
            <button className="cell" onClick={handleClick(col, row)}>
                {mark}
            </button>  
        </>
     )
 }



  const Row = ({ value }) => {
    const cells = Array(panel)
      .fill("")
      .map((e, index) => (
        <Cell row={index} col={value} key={index}/>
      ));
    return cells;
  };

  return (
    <div className="row board">
      {Array(panel)
        .fill("")
        .map((e, index) => (
          <div>
            <Row value={index} key={index} />
          </div>
        ))}
    </div>
  );
};

export default Game;
