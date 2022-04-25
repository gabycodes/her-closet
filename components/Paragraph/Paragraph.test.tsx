import React from 'react';

import Paragraph from './Paragraph';
import { render } from '../../utils/test-helpers';

describe('Paragraph', () => {
  it(`renders correctly`, () => {
    const { getByText } = render(<Paragraph>paragraph!</Paragraph>);
    const paragraph = getByText('paragraph!');
    expect(paragraph).toBeVisible();
    expect(paragraph).toHaveStyle(`font-size: 1.8rem`);
    expect(paragraph).toHaveStyle(`font-weight: 300`);
    expect(paragraph).toHaveStyle(`font-family: Poppins,sans-serif`);
  });
});
