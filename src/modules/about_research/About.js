import React from 'react';
import '../../App.css'

function About() {

    return (
        <div className='about'>
            <h2>About</h2>
            <p className='text_body'>Any given cells life cycle is determined by the population of cells around it. The cycle is effected by over and under population. If a cell has 2 or 3 cell neighbors than the population is stable. The cell will live on to the next cycle. When a cell has less than 2 neighbors the cell population is under populated. The cell will die due to under population. A cell will also die due to over population. Having 4 or more neighbors constitues over population. Conversely a call can be brought back to life when it has exactly 3 neighbors. This concept is called reproduction. It is the constant calculation and recalculation of neighbors that drives the population life cycle in the Game of Life. The game will continue indefinitely once a stable and or reoccuring pattern of cells is reached.</p>
        </div>
    );
}

export default About;