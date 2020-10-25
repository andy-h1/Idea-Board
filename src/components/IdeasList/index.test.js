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
    // set up

    const sortIdea = jest.fn();

    // render
    const { getByTestId } = render(<IdeasList />, { ideas, sortIdea });
    const expectedSortValue = 'timeAsc';

    // faking the user behaviour i.e. clicking a dropdown
    userEvent.selectOptions(getByTestId('dropdown'), [expectedSortValue]);
    // assert - check it's called with what we expect
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
    // render the component with whatever context is needed
    const { getByText } = render(<IdeasList />, { ideas });

    // it should render all the idea titles that are present
    ideas.map((idea) => getByText(`${idea.title}`));
  });
});
