import './App.css';
import oneBoardIcon from './images/one_nobg.png';
import twoBoardIcon from './images/two_nobg.png';


import TicTacToe from './TicTacToe/TicTacToe';
// eslint-disable-next-line
import React, { Component, useState }  from 'react';

function App() {
  const [secondGame, setsecondGame] = useState(false);

  const HandleClick = () => {
    setsecondGame(!secondGame);
  }
  
  return (
    <><h1>
      Tic Tac Toe
    </h1>
    <div onClick={ HandleClick } className="imgDiv"><img src = {secondGame ? oneBoardIcon : twoBoardIcon} ></img></div>
    <div className="App">
        <TicTacToe />

    {secondGame && <TicTacToe />}
    </div>
    
    </>
  );
}

export default App;
