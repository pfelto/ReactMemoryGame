import React from 'react';

export default function Cell({ number, cellStatus, handleClick }) {
    return (
        <button
            onClick={() => {
                handleClick(number);
            }}
            style={{ backgroundColor: cellStatus(number) }}
            data-testid="cell"
            className="col p-4 box"
        ></button>
    );
}
