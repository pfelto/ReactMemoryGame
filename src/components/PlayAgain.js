import React from 'react';

export default function PlayAgain({ gameStatus, initGame }) {
    if (gameStatus === 'Active' || gameStatus === 'StandBy') {
        return null;
    }

    return (
        <button className="col" onClick={initGame}>
            {gameStatus === 'NewGame' ? 'start' : 'Play Again'}
        </button>
    );
}
