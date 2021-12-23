export default function solveSudoku(arr) { // backtracking method
    let row = 0;
    let col = 0;
    let isEmpty = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                isEmpty = true;
                // store position of cell that is unfilled
                row = i;
                col = j;
                break;
            }
        }
        if (isEmpty) {
            break;
        }
    }
    if (!isEmpty) {
        return true;
    }

    // go through all 9 possible numbers to check if the number is valid
    for (let i = 1; i <= arr.length; i++) {
        if (isValid(arr, row, col, i)) {
            arr[row][col] = i;
            if (solveSudoku(arr)) {
                return true;
            } else {
                // incorrect number for the cell, reset to 0
                arr[row][col] = 0;
            }
        }
    }
    return false; // no possible combinations
}

// returns true if the number put in a specific row and column does not violate sudoku rules
function isValid(arr, row, col, num) {
    // check row
    for (let i = 0; i < arr.length; i++) {
        if (arr[row][i] === num) {
            return false;
        }
    }

    // check column
    for (let i = 0; i < arr[0].length; i++) {
        if (arr[i][col] === num) {
            return false;
        }
    }

    // check box
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);

    for (let i = 0; i < arr.length / 3; i++) {
        for (let j = 0; j < arr[i].length / 3; j++) {
            if (arr[startRow + i][startCol + j] === num) {
                return false;
            }
        }
    }

    return true; // passes all checks
}