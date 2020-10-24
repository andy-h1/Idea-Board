import React from 'react';
import { render } from '@testing-library/react';
import { IdeaContext } from './contexts/IdeaContext';

const AllTheProviders = ({ children, customContext }) => (
  <IdeaContext.Provider
    value={{
      ideas: [],
      sortIdea: () => null,
      ...customContext
    }}
  >
    {children}
  </IdeaContext.Provider>
);

const customRender = (ui, customContext, options) => {
  /* eslint-disable react/display-name */
  return render(ui, {
    wrapper: () => <AllTheProviders customContext={customContext}>{ui}</AllTheProviders>,
    ...options
  });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
