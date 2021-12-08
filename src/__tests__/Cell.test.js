import React from 'react';
import { render } from '@testing-library/react';
import Cell from '../components/Cell';

describe('Render Cell', () => {
    test('1 col p-4 box div', () => {
        const { container } = render(<Cell />);
        expect(container.children.length).toBe(1);
        expect(container.children[0]).toHaveClass('col p-4 box');
    });
});
