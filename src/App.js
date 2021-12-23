import './App.css';
import Grid from './Grid';
import Button from '@mui/material/Button';
import React, { createRef } from 'react';

function App() {
  const gridRef = createRef();

  return (
    <div className="App">
      <h2>Sudoku</h2>
      <Grid ref={gridRef}></Grid>
      <Button variant="contained" sx={{m: 2}} onClick={() => gridRef.current.solveSudoku()}>solve</Button>
    </div>
  );
}

export default App;
