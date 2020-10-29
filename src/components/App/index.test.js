import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

describe('App Component', () => {
  it('should render', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it.todo('should ');
});
