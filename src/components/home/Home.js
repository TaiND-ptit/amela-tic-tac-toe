import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";


const Home = () => {
  const [numberCell, setNumberCell] = useState();
  const handleSubmit = () =>{
    if (
      numberCell == null ||
      (!Number.isInteger(numberCell) &&
        (parseInt(numberCell) < 3 ||
          parseInt(numberCell) > 20))
    ) {
      alert("Invalid data!");
      return;
    }

  }
  return (
    <div className="homeContainer">
      <div className="home">
        <h1>Vui lòng chọn kích thước ô</h1>
        <input type="text" min="3" max="20" 
        placeholder="Vui lòng nhâp kích thước ô"
        onChange={(e)=> setNumberCell(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") {
            if (
              numberCell == null ||
              (!Number.isInteger(numberCell) &&
                (parseInt(numberCell) < 3 ||
                  parseInt(numberCell) > 20))
            ) {
              alert("Invalid data!");
              return;
            }
          }
        }}
        />
        <div className='btn-submit'>
         <Link to={`/game/${numberCell}`} type="submit" onClick={handleSubmit}>Bắt đầu</Link> 
        </div>
      </div>
    </div>
  );
};

export default Home;
