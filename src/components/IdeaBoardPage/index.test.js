import React from 'react';
import { render } from '../../test-utils';
import { IdeaBoardPage } from '.';

describe('Ideas Page Component', () => {
  it('should render', () => {
    const { container } = render(<IdeaBoardPage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show user correct number of ideas created', () => {
    // set up => write 2 ideas
    const ideas = [
      {
        title: 'Valorant',
        description: 'Competitive FPS',
        id: '1',
        time: new Date()
      },
      {
        title: 'Among Us',
        description: 'Social game',
        id: '2',
        time: new Date()
      }
    ];

    // render the component with the set up
    const { getByText } = render(<IdeaBoardPage />, { ideas });

    // assert that what we expect is true
    getByText(`Currently you've come up with ${ideas.length} ideas!!`);
  });
});
