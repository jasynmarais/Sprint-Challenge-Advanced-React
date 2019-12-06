import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import { NavBar } from '../NavBar';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<NavBar />);
});

describe('Navbar component', () => {
  it('can debug the output', () => {
    tools.debug();
  });
});