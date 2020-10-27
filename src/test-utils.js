import React from 'react';
import { render } from '@testing-library/react';
import { IdeaContext } from './contexts/IdeaContext';

const AllTheProviders = ({ children, customContext }) => (
  <IdeaContext.Provider
    value={{
      ideas: [],
      addIdea: () => null,
      sortIdea: () => null,
      removeIdea: () => null,
      updateIdea: () => null,
      ...customContext
    }}
  >
    {children}
  </IdeaContext.Provider>
);

const customRender = (ui, customContext) => {
  /* eslint-disable react/display-name */
  return render(ui, {
    wrapper: () => <AllTheProviders customContext={customContext}>{ui}</AllTheProviders>
  });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
