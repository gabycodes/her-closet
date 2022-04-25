import React from 'react';

import Heading from './Heading';
import { render } from '../../utils/test-helpers';

const testHeading = (tag: string, fontSize: string) => {
  it(`renders ${tag} correctly`, () => {
    const { getByText } = render(<Heading tag={tag} text="heading!" />);
    const heading = getByText('heading!');
    expect(heading).toBeVisible();
    expect(heading).toHaveStyle(`font-size: ${fontSize}`);
    expect(heading).toHaveStyle(`font-weight: 400`);
    expect(heading).toHaveStyle(`font-family: Montserrat,sans-serif`);
  });
};

describe('Heading', () => {
  testHeading('h1', '5.5rem');
  testHeading('h2', '4.5rem');
  testHeading('h3', '4rem');
  testHeading('h4', '3.5rem');
  testHeading('h5', '3rem');
  testHeading('h6', '3rem');
});
