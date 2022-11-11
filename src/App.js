import React from 'react';

import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Links } from './features/links/Links';
import { PatternMaker } from './features/patternMaker/patternMaker';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="Header">
          <span>
            <span className="titleText"> Wordle Solver </span>
            <img src={logo} className="App-logo" alt="logo" />
          </span>
        </div>
      </header>
      <p>
        Enter the pattern and click "add" to add to the list
      </p>
      <PatternMaker />
      <Links />
    </div>
  );
}

export default App;
