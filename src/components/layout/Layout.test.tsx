import React from 'react';

import Layout from './Layout';
import { render } from 'utils/test-helpers';

const renderLayout = () =>
  render(
    <Layout>
      <p>child component ayyeeee</p>
    </Layout>
  );

describe('Layout', () => {
  it(`renders`, () => {
    const { getByTestId } = renderLayout();
    expect(getByTestId('layout')).toBeVisible();
  });

  it(`renders the navbar and footer`, () => {
    const { getByTestId } = renderLayout();
    expect(getByTestId('navbar')).toBeVisible();
    expect(getByTestId('footer')).toBeVisible();
  });

  it(`accepts child components`, () => {
    const { getByText } = renderLayout();
    expect(getByText('child component ayyeeee')).toBeVisible();
  });
});
