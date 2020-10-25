import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test-utils';
import { IdeasForm } from '.';

describe('Ideas Form Component', () => {
  it('should render', () => {
    const { container } = render(<IdeasForm />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call addIdea with correct values', () => {
    // render component
    const addIdea = jest.fn();
    const { getByTestId, queryByTestId } = render(<IdeasForm />, { addIdea });
    // user clicks 'add idea' button
    userEvent.click(getByTestId('addIdeaButton'));
    // assert that the form has been rendered
    getByTestId('ideasFormForm');

    const title = 'Valorant';
    const description = 'First Person Shooter';
    // type something into title
    userEvent.type(getByTestId('titleInput'), title);

    // type something into decsription
    userEvent.type(getByTestId('descriptionInput'), description);
    // click add or submit button
    userEvent.click(getByTestId('submitButton'));
    // check that addIdea was called with the same values you just typed
    expect(addIdea).toHaveBeenCalledWith(title, description);
    // I also expect inputs to have been reset and form to have been reset
    expect(queryByTestId('ideasFormForm')).toBe(null);
  });

  it('should show user characters remaining in description input', () => {
    const { getByTestId, getByText } = render(<IdeasForm />);
    // render component
    userEvent.click(getByTestId('addIdeaButton'));
    // assert that the form has been rendered
    getByTestId('ideasFormForm');
    // user types something into description
    const description =
      'Moving Icebox up from Episode 2 does come with a trade-off: we’ll be delaying the release of our newest Agent for two weeks';

    userEvent.type(getByTestId('descriptionInput'), description);
    // once user types over 120 characters render out warning message
    getByText(`Characters remaining: ${140 - description.length}`);
  });

  it('should return user back to page when they click cancel', () => {
    // render component
    const { getByTestId, queryByTestId } = render(<IdeasForm />);
    userEvent.click(getByTestId('addIdeaButton'));
    getByTestId('ideasFormForm');
    // user clicks cancel
    userEvent.click(getByTestId('cancelButton'));
    // assert that form has not been rendered
    expect(queryByTestId('ideasFormForm')).toBe(null);
  });
});
