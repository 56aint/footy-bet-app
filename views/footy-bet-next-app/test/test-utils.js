import { render } from '@testing-library/react';

// any providers needed for testing e.g ReduxProvider, ThemeProvider
const Providers = ({ children }) => {
  return children;
};

// eslint-disable-next-line max-len
const customRender = (ui, options = {}) => { return render(ui, { wrapper: Providers, ...options }); };

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
