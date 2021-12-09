import React from 'react';
import Cell from './Cell';

export default function CellGrid({ cellStatus, handleClick }) {
    let board = [];
    let k = 0;
    for (let r = 0; r < 5; r++) {
        let row = [];
        for (let col = 0; col < 5; col++) {
            row.push(
                <Cell
                    key={5 * r + col}
                    number={5 * r + col}
                    cellStatus={cellStatus}
                    handleClick={handleClick}
                />
            );
        }
        board.push(
            <div key={k} className="row">
                {row}
            </div>
        );
        k++;
    }

    return <>{board}</>;
}
