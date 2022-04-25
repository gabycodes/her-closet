import React from 'react';

import Link from './Link';
import { render } from 'utils/test-helpers';
import Icon from 'components/icon/Icon';

describe('Link', () => {
  it(`renders correctly`, () => {
    const { getByText } = render(<Link text="link!" url="#" />);
    const link = getByText('link!');
    expect(link).toBeVisible();
  });

  it(`accepts an icon`, () => {
    const { getByTestId } = render(
      <Link text="link!" url="#" icon={<Icon name="search" />} />
    );
    const icon = getByTestId('icon');
    expect(icon).toBeVisible();
  });

  it(`automagically adds an icon for external links`, () => {
    const { getByTestId } = render(<Link text="link!" url="#" isExternal />);
    const icon = getByTestId('icon');
    expect(icon).toBeVisible();
  });
});
