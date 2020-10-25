import React from 'react';
import { render } from '@testing-library/react';
import { IdeaCard } from '.';

const idea = {
  title: 'League of Legends',
  description: 'MOBA',
  id: '1',
  time: new Date().toLocaleTimeString()
};

describe('Idea Card Component', () => {
  it('should render', () => {
    const { container } = render(<IdeaCard {...idea} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it.todo('should render form when user clicks edit');
  // user clicks the 'edit' button
  // card should show two input fields
  // input fields should show current data

  it.todo('should render updated time when card has been updated');
  // user clicks 'Update Idea' button card
  // time property updated
  // on the card time created changed to time updated
  // displays the new time

  it.todo('should render updated changes onto the card');
  // user adds changes to either title or description inputs
  // user clicks 'Update Idea' button card
  // card rerenders with updated changes

  it.todo('should show the users characters remaining in textarea');
  // user types in description text area
  // currently 120+ in description area
  // card shows current characters remaining to user

  it.todo('should render data on the idea card');
});
