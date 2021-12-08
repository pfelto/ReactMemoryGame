import React, { useState } from 'react';
import Cell from './Cell';
import { CellColors } from '../services/CellColors';

export default function CellGrid({ selectedCells, secondsLeft }) {
    const [guessedCells, setGuessedCells] = useState([]);

    function cellStatus(number) {
        if (
            selectedCells.includes(number) &&
            !guessedCells.includes(number) &&
            secondsLeft > 0
        ) {
            return CellColors.selected;
        }
        if (selectedCells.includes(number) && guessedCells.includes(number)) {
            return CellColors.correct;
        }
        if (!selectedCells.includes(number) && guessedCells.includes(number)) {
            return CellColors.wrong;
        } else {
            return CellColors.available;
        }
    }

    function handleClick(number) {
        setGuessedCells((guessCells) => [...guessCells, number]);
    }

    let board = [];
    let k = 0;
    for (let r = 0; r < 5; r++) {
        let row = [];
        for (let col = 0; col < 5; col++) {
            row.push(
                <Cell
                    key={5 * r + col}
                    number={5 * r + col}
                    cellStatus={(number) => cellStatus(number)}
                    handleClick={(number) => handleClick(number)}
                    secondsLeft={secondsLeft}
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
