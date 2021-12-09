import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import { CellColors } from '../services/CellColors';

export default function CellGrid({ secondsLeft }) {
    //State
    const [selectedCells, setSelectedCells] = useState([]);
    const [guessedCells, setGuessedCells] = useState([]);

    useEffect(() => {
        setSelectedCells([0, 1, 2, 3, 4, 5]);
    }, []);

    //derived State
    const wrongNums = guessedCells.filter(
        (cell) => !selectedCells.includes(cell)
    );
    const gameStatus = selectedCells.every((cell) =>
        guessedCells.includes(cell)
    )
        ? 'Winner'
        : wrongNums.length === 3
        ? 'Loser'
        : secondsLeft > 0
        ? 'Standby'
        : 'Active';

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
        if (gameStatus !== 'Active') return;
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
