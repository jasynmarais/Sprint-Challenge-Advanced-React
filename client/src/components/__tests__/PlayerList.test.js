import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { PlayerList } from '../PlayerList';

afterEach(cleanup);

describe('Playerlist component', () => {
  it('render loading when no players', () => {
    const { getByText } = render(<PlayerList />);
    expect(getByText(/loading.../i)).toBeInTheDocument();
  });
});