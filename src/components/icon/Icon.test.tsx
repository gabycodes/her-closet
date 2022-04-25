import React from 'react';

import Icon from './Icon';
import { render } from 'utils/test-helpers';

describe('Icon', () => {
  it(`renders small size correctly`, () => {
    const { getByTestId } = render(<Icon name="search" size="sm" />);
    const icon = getByTestId('icon');

    expect(icon).toBeVisible();
    expect(icon).toHaveStyle(`font-size: 1.5rem`);
  });

  it(`renders medium size correctly`, () => {
    const { getByTestId } = render(<Icon name="cart" size="md" />);
    const icon = getByTestId('icon');

    expect(icon).toBeVisible();
    expect(icon).toHaveStyle(`font-size: 2rem`);
  });

  it(`renders large size correctly`, () => {
    const { getByTestId } = render(<Icon name="bookmark" size="lg" />);
    const icon = getByTestId('icon');

    expect(icon).toBeVisible();
    expect(icon).toHaveStyle(`font-size: 3rem`);
  });
});
