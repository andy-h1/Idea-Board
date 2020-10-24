import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test-utils';
import { IdeasList } from '.';

describe('Ideas List Component', () => {
  it('should render', () => {
    const { container } = render(<IdeasList />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call sortIdea with correct value', () => {
    // set up
    const ideas = [
      {
        title: 'Day Z',
        description: 'Survival',
        id: '1',
        time: new Date().toLocaleTimeString()
      }
    ];

    const sortIdea = jest.fn();

    // render
    const { getByTestId } = render(<IdeasList />, { ideas, sortIdea });
    const expectedSortValue = 'timeAsc';

    // faking the user behaviour i.e. clicking a dropdown
    userEvent.selectOptions(getByTestId('dropdown'), [expectedSortValue]);
    // assert - check it's called with what we expect
    expect(sortIdea).toHaveBeenCalledWith(expectedSortValue);
  });

  it.todo('should render message if no ideas');
  it.todo('should render the ideas when there are ideas');
});
