import React from 'react';
import { render } from '@testing-library/react';
import { IdeasForm } from '.';

describe('Ideas Form Component', () => {
  it('should render', () => {
    const { container } = render(<IdeasForm />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it.todo('should show user Idea Form when they click add idea button');
  // user clicks 'add idea' button
  // shows user form

  it.todo('should show user characters remaining in description input');
  // user types in description text area and reaches 120 characters
  // warns user of remanining character count (max 140)

  it.todo('should call addIdea when user clicks add button');
  // user types into title and description inputs
  // user clicks 'add' button
  // calls addIdea from IdeaContext
});
