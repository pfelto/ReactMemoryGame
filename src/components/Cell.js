import React from 'react';

export default function Cell({ number, cellStatus, handleClick, secondsLeft }) {
    return (
        <button
            onClick={() => {
                handleClick(number);
            }}
            style={{ backgroundColor: cellStatus(number) }}
            disabled={secondsLeft > 0 ? true : false}
            className="col p-4 box"
        ></button>
    );
}
