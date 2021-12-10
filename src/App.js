import React from 'react';
import CellGrid from './components/CellGrid';
import GameDisplay from './components/GameDisplay';
import PlayAgain from './components/PlayAgain';
import { CellColors } from './services/CellColors';
import useGame from './hooks/useGame';

function App() {
    const {
        secondsLeft,
        selectedCells,
        guessedCells,
        setGuessedCells,
        initGame,
    } = useGame();

    //derived State
    const wrongNums = guessedCells.filter(
        (cell) => !selectedCells.includes(cell)
    );

    const gameStatus =
        selectedCells.every((cell) => guessedCells.includes(cell)) &&
        secondsLeft === 0
            ? 'Winner'
            : wrongNums.length === 3
            ? 'Loser'
            : selectedCells.length === 0
            ? 'NewGame'
            : secondsLeft > 0
            ? 'StandBy'
            : 'Active';

    //App logic

    function cellStatus(number) {
        if (
            selectedCells.includes(number) &&
            !guessedCells.includes(number) &&
            (secondsLeft > 0 || gameStatus === 'Loser')
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
        setGuessedCells((guessedCells) => [...guessedCells, number]);
    }

    //render

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
                    <PlayAgain gameStatus={gameStatus} initGame={initGame} />
                    <GameDisplay
                        gameStatus={gameStatus}
                        secondsLeft={secondsLeft}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
