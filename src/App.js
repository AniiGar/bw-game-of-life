import React from 'react';
import './App.css';

import Game from './modules/game_of_life/Game';
import Rules from './modules/game_of_life/Rules';
import About from './modules/about_research/About'

function App() {

  return (
    <div className="App App-header">
      <h1>Conway's Game of Life</h1>
      <About />
      <div className='lower_page'>
        <Rules />
        <Game />
      </div>
    </div>  
  );
}

export default App;
