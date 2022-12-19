import React from 'react';
import Tictactoe from './components/Tictactoe';
import Game from './components/Game';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';

function App() {
  return (
    <Tictactoe/>
    // <Routes>
    //   <Route path="/" element={<Home />}/>
    //   <Route path="/game/:numberCell" element={<Game />} />
    // </Routes>
    
  );
}

export default App;
