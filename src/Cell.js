import React, { useState } from 'react';

function Cell(props) {
    const [value, setValue] = useState('');
    const borderStyle = {
        borderTopColor: props.row % 3 === 0 ? '#85144b' : 'grey',
        borderBottomColor: props.row % 3 === 2 ? '#85144b' : 'grey',
        borderLeftColor: props.col % 3 === 0 ? '#85144b' : 'grey',
        borderRightColor: props.col % 3 === 2 ? '#85144b' : 'grey',
        borderTopWidth: props.row === 0 ? 3 : 1,
        borderBottomWidth: props.row === 8 ? 3 : 1,
        borderLeftWidth: props.col === 0 ? 3 : 1,
        borderRightWidth: props.col === 8 ? 3 : 1,

    }

    return (
        <input
            maxLength="1"
            style={{...styles.box, ...borderStyle}}
            value={value}
            onChange={event => {
                const result = validateInput(event);
                if (result) {
                    setValue(result);
                    props.updateGrid(props.row, props.col, result);
                } else {
                    setValue('');
                }
            }}
        >
        </input>);
}

function validateInput(event) {
    const value = event.target.value;
    return parseInt(value); // return true if it is an integer and not the value is not zero, else false
}

const styles = {
    box: {
        width: "2em",
        height: "2em",
        textAlign: "center",
        borderRadius: "0em",
        borderStyle: "solid",
        outlineColor: "#39CCCC",
    }
}

export default Cell;