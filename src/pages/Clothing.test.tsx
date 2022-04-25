import React from 'react';

import Clothing from './clothing';
import { render } from 'utils/test-helpers';

describe('Clothing', () => {
  it(`renders`, () => {
    const { getByText } = render(<Clothing />);
    expect(getByText('All The Clothes')).toBeVisible();
  });
});
