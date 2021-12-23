import React, { forwardRef, useImperativeHandle } from 'react';
import Cell from './Cell';
import Stack from '@mui/material/Stack';
import solveSudoku from './functions/solveSudoku';

const Grid = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        solveSudoku: () => {
            solveSudoku(arr);
        }
      }));
    return generateGrid();
});

let arr = [];

function generateGrid() {
    let grid = [];
    let tempArr = []
    for (let i = 0; i < 9; i++) {
        let row = [];
        let arrRow = [];
        for (let j = 0; j < 9; j++) {
            row.push(<Cell key={i + ', ' + j} row={i} col={j} updateGrid={updateGrid}></Cell>);
            arrRow.push(0);
        }
        grid.push(<div key={i}>{row}</div>);
        tempArr.push(arrRow);
        arr = tempArr;
    }
    return <Stack>{grid}</Stack>;
}

function updateGrid(row, col, value) {
    arr[row][col] = value;
}

export default Grid;