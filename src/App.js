import React from 'react';
import Box from '@mui/material/Box';
import logo from './logo.svg';
import { Links } from './features/links/Links';
import { PatternListMaker } from './features/patternListMaker/patternListMaker';
import './App.css';

function App() {

  return (
    <Box className="App">
      <header className="App-header">
        <Box sx={{marginLeft: '30px'}}>
          <span>
            <span className="titleText"> Wordle Solver </span>
            <img src={logo} className="App-logo" alt="logo" />
          </span>
        </Box>
      </header>
      <PatternListMaker />
      <Links />
    </Box>
  );
}

export default App;
