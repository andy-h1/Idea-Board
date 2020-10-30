import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test-utils';
import { IdeasList } from '.';

const ideas = [
  {
    title: 'Day Y',
    description: 'Survival',
    id: '1',
    time: new Date().toLocaleTimeString()
  },
  {
    title: 'Among Us',
    description: 'Social murder',
    id: '2',
    time: new Date().toLocaleTimeString()
  },
  {
    title: 'Among Us 2',
    description: 'Social murder',
    id: '5',
    time: new Date().toLocaleTimeString()
  }
];

describe('Ideas List Component', () => {
  it('should render', () => {
    const { container } = render(<IdeasList />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call sortIdea with correct value', () => {
    const sortIdea = jest.fn();

    const { getByTestId } = render(<IdeasList />, { ideas, sortIdea });
    const expectedSortValue = 'timeAsc';

    userEvent.selectOptions(getByTestId('ideasListdropdown'), [expectedSortValue]);

    expect(sortIdea).toHaveBeenCalledWith(expectedSortValue);
  });

  it('should render message if no ideas', () => {
    const emptyIdeas = [];
    const { getByText } = render(<IdeasList />, { ideas: emptyIdeas });
    getByText(
      'An idea that is developed and put into action is more important than an idea that exists only as an idea...'
    );
  });

  it('should render all the ideas that are present', () => {
    const { getByText } = render(<IdeasList />, { ideas });

    ideas.map((idea) => getByText(`${idea.title}`));
  });
});
