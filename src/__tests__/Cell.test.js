import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Cell from '../components/Cell';

describe('Render Cell', () => {
    test('1 col p-4 box div', () => {
        const { container } = render(
            <Cell number={1} cellStatus={() => {}} handleClick={() => {}} />
        );
        expect(container.children.length).toBe(1);
        expect(container.children[0]).toHaveClass('col p-4 box');
    });
});
describe('Handle Button press', () => {
    test('Handle Click', () => {
        const fn = jest.fn();
        fn.mockReturnValueOnce(1).mockReturnValue(0);
        const r = render(
            <Cell number={1} cellStatus={() => {}} handleClick={fn} />
        );
        const cell = r.getByTestId('cell');
        fireEvent.click(cell);
        expect(fn.mock.results).toEqual([
            {
                type: 'return',
                value: 1,
            },
        ]);
        fireEvent.click(cell);
        expect(fn.mock.results).toEqual([
            {
                type: 'return',
                value: 1,
            },
            {
                type: 'return',
                value: 0,
            },
        ]);
    });
});
