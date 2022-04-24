import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Theme, { GlobalStyles } from '../styles/Theme';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles>{children}</GlobalStyles>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
