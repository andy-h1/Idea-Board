import React from 'react';
import { render } from '@testing-library/react';
import IdeasForm from '.';

describe('Ideas Form Component', () => {
  it('should render', () => {
    const { container } = render(<IdeasForm />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
