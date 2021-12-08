import React from 'react';
import { render } from '@testing-library/react';
import CellGrid from '../components/CellGrid';

describe('Render CellGrid', () => {
  test('5 row divs', () => {
    const { container } = render(<CellGrid />);
    expect(container.children.length).toBe(5);
    for (let i = 0; i < container.children.length; i++) {
      expect(container.children[i]).toHaveClass('row');
    }
  });
  test('25 col p-5 box divs', () => {
    const { container } = render(<CellGrid />);
    for (let r = 0; r < container.children.length; r++) {
      expect(container.children[r].children.length).toBe(5);
      for (let i = 0; i < container.children[r].children.length; i++) {
        expect(container.children[r].children[i]).toHaveClass('col p-4 box');
      }
    }
  });
});
