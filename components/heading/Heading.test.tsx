import React from 'react';

import Heading from './Heading';
import { render } from '../../utils/test-helpers';
import Theme from '../../styles/Theme';

const testHeading = (tag: string, fontSize: string) => {
  it(`renders ${tag} correctly`, () => {
    const { getByText } = render(<Heading tag={tag} text="heading!" />);
    const heading = getByText('heading!');
    expect(heading).toBeVisible();
    expect(heading).toHaveStyle(`font-size: ${fontSize}`);
    expect(heading).toHaveStyle(`font-family: Poppins,sans-serif`);
  });
};

describe('Heading', () => {
  testHeading('h1', '3rem');
  testHeading('h2', '2.5rem');
  testHeading('h3', '2rem');
  testHeading('h4', '1.5rem');
  testHeading('h5', '1.5rem');
  testHeading('h6', '1.5rem');
});
