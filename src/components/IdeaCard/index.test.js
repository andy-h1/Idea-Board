import React from 'react';
import { render } from '@testing-library/react';
import { IdeaCard } from '.';

describe('Idea Card Component', () => {
  it('should render', () => {
    const { container } = render(<IdeaCard />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
