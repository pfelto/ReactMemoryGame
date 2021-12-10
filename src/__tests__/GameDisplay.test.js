import React from 'react';
import { render } from '@testing-library/react';
import GameDisplay from '../components/GameDisplay';

describe('Render Game Display Different Ways', () => {
    it('Display NewGame message', () => {
        const r = render(<GameDisplay gameStatus="NewGame" secondsLeft={3} />);
        const text = r.getByTestId('game-display');
        expect(text).toHaveTextContent('Press Start to play Memory Match');
    });
    it('Display secondsLeft', () => {
        const r = render(<GameDisplay gameStatus="StandBy" secondsLeft={2} />);
        const text = r.getByTestId('game-display');
        expect(text).toHaveTextContent('2');
    });
    it('Display Active message', () => {
        const r = render(<GameDisplay gameStatus="Active" secondsLeft={0} />);
        const text = r.getByTestId('game-display');
        expect(text).toHaveTextContent('Recall the cells that were blue');
    });
    it('Display GameStatus message', () => {
        const r = render(<GameDisplay gameStatus="Loser" secondsLeft={0} />);
        const text = r.getByTestId('game-display');
        expect(text).toHaveTextContent('Loser');
    });
});
