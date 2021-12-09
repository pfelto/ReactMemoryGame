import React, { useState, useEffect } from 'react';
import CellGrid from './components/CellGrid';
import { utils } from './services/ArrUtils';
import { CellColors } from './services/CellColors';

function App() {
    const [gameStart, setGameStart] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(3);
    const [selectedCells, setSelectedCells] = useState([]);
    const [guessedCells, setGuessedCells] = useState([]);

    useEffect(() => {
        if (secondsLeft > 0 && gameStart) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
    });

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

    //App logic

    function initGame() {
        setGameStart(true);
        setSelectedCells(utils.shuffle(utils.range(25)).slice(0, 5));
        setGuessedCells([]);
        setSecondsLeft(3);
    }

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

    return (
        <div className="App">
            <div className="container">
                <div className="row my-1">
                    <div className="col text-center">
                        You will have 3 seconds to memorize 6 blue random cells
                    </div>
                </div>
                <CellGrid
                    cellStatus={(number) => cellStatus(number)}
                    handleClick={(number) => handleClick(number)}
                />
                <div className="row my-1">
                    {!gameStart ||
                    gameStatus === 'Winner' ||
                    gameStatus === 'Loser' ? (
                        <button
                            className="col"
                            onClick={() => {
                                initGame();
                            }}
                        >
                            {!gameStart ? 'start' : 'Play Again'}
                        </button>
                    ) : null}
                    <div className="col text-end">
                        {!gameStart
                            ? 'Press Start to play Memory Match'
                            : secondsLeft > 0
                            ? secondsLeft
                            : gameStatus === 'Active'
                            ? 'Recall the cells that were blue'
                            : gameStatus}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
