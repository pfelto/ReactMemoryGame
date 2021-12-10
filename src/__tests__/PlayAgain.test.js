import React from 'react';
import { render } from '@testing-library/react';
import PlayAgain from '../components/PlayAgain';

describe('Render PlayAgain', () => {
    it('Start PlayAgain Button', () => {
        const r = render(
            <PlayAgain gameStatus="NewGame" initGame={() => {}} />
        );
        const button = r.getByRole('button');
        expect(button).toHaveTextContent('start');
    });
    it('PlayAgain PlayAgain Button', () => {
        const r = render(<PlayAgain gameStatus="Loser" initGame={() => {}} />);
        const button = r.getByRole('button');
        expect(button).toHaveTextContent('Play Again');
    });
    it('No PlayAgain Button', () => {
        const { container } = render(
            <PlayAgain gameStatus="Active" initGame={() => {}} />
        );
        expect(container.firstChild).not.toBe();
    });
});
