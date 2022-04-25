import React from 'react';

import Home from './index';
import { render } from 'utils/test-helpers';

describe('Home', () => {
  it(`renders`, () => {
    const { getByText } = render(<Home />);
    expect(getByText('Everyday Luxury.')).toBeVisible();
  });
});
