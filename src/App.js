import React from 'react';

import logo from './logo.svg';
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
      <div className="patternContainer">
          <div className="testPatternEdit">
              <PatternMaker value={'00000'}/>
          </div>
          <button
              className="buttonAdd"
              aria-label="Add the pattern"
          >
              Add
          </button>

      </div>
      <Links />
    </div>
  );
}

export default App;
