import React from 'react';

export default function GameDisplay({ gameStatus, secondsLeft }) {
    return (
        <div className="col text-end">
            {gameStatus === 'NewGame'
                ? 'Press Start to play Memory Match'
                : secondsLeft > 0
                ? secondsLeft
                : gameStatus === 'Active'
                ? 'Recall the cells that were blue'
                : gameStatus}
        </div>
    );
}
