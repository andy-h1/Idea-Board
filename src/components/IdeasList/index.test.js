import React from 'react';
import { render } from '@testing-library/react';
import IdeasList from '.';

describe('Ideas List Component', () => {
  it('should render', () => {
    const { container } = render(<IdeasList />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
