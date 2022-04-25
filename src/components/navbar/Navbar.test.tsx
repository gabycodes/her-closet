import React from 'react';

import Navbar from './Navbar';
import { render } from 'utils/test-helpers';

describe('Navbar', () => {
  it(`renders`, () => {
    const { getByTestId, getByText } = render(<Navbar />);
    const nav = getByTestId('navbar');
    expect(nav).toBeVisible();
    expect(getByText('New')).toBeVisible();
    expect(getByText('Clothing')).toBeVisible();
    expect(getByText('Accessories')).toBeVisible();
  });
});
