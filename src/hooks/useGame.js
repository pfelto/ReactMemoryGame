import { useState, useEffect } from 'react';
import { utils } from '../services/ArrUtils';

export default function useGame() {
    const [secondsLeft, setSecondsLeft] = useState(3);
    const [selectedCells, setSelectedCells] = useState([]);
    const [guessedCells, setGuessedCells] = useState([]);

    useEffect(() => {
        if (secondsLeft > 0 && selectedCells.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
    });

    function initGame() {
        setSelectedCells(utils.shuffle(utils.range(25)).slice(0, 6));
        setGuessedCells([]);
        setSecondsLeft(3);
    }

    return {
        secondsLeft,
        selectedCells,
        guessedCells,
        setGuessedCells,
        initGame,
    };
}
