import React, { useState, useEffect } from 'react';
import CellGrid from './components/CellGrid';

function App() {
    const [selectedCells, setSelectedCells] = useState([]);
    const [gameStart, setGameStart] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(3);

    useEffect(() => {
        setSelectedCells([0, 1, 2, 3, 4, 5]);
    }, []);

    useEffect(() => {
        if (secondsLeft > 0 && gameStart) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
    });

    const initBoard = () => {
        let board = [];
        let k = 0;
        for (let r = 0; r < 5; r++) {
            let row = [];
            for (let col = 0; col < 5; col++) {
                row.push(
                    <button
                        key={5 * r + col}
                        style={{ backgroundColor: 'gray' }}
                        className="col p-4 box"
                    ></button>
                );
            }
            board.push(
                <div key={k} className="row">
                    {row}
                </div>
            );
            k++;
        }
        return board;
    };

    return (
        <div className="App">
            <div className="container">
                <div className="row my-1">
                    <div className="col text-center">
                        You will have 3 seconds to memorize 6 blue random cells
                    </div>
                </div>
                {gameStart ? (
                    <CellGrid
                        key={1}
                        selectedCells={selectedCells}
                        secondsLeft={secondsLeft}
                    />
                ) : (
                    initBoard()
                )}
                <div className="row my-1">
                    {!gameStart ? (
                        <button
                            className="col"
                            onClick={() => setGameStart(true)}
                        >
                            start
                        </button>
                    ) : null}
                    <div className="col text-end">
                        {!gameStart
                            ? 'Press Start to play Memory Match'
                            : secondsLeft > 0
                            ? secondsLeft
                            : 'Recall the cells that were blue'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
