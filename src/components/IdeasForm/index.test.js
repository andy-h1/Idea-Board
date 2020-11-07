import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test-utils';
import { IdeasForm } from '.';
import { MAX_CHAR_LIMIT } from '../../tokens';

describe('IdeasForm', () => {
  it('should render', () => {
    const { container } = render(<IdeasForm />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call addIdea with correct values', () => {
    const addIdea = jest.fn();
    const { getByTestId, queryByTestId } = render(<IdeasForm />, { addIdea });
    userEvent.click(getByTestId('ideasFormAddIdeaButton'));
    getByTestId('ideasFormForm');

    const title = 'Valorant';
    const description = 'First Person Shooter';
    userEvent.type(getByTestId('ideasFormTitleInput'), title);

    userEvent.type(getByTestId('ideasFormDescriptionInput'), description);
    userEvent.click(getByTestId('ideasFormSubmitButton'));
    expect(addIdea).toHaveBeenCalledWith(title, description);
    expect(queryByTestId('ideasFormForm')).toBe(null);
  });

  it('should show user characters remaining in description input', () => {
    const { getByTestId, getByText } = render(<IdeasForm />);

    userEvent.click(getByTestId('ideasFormAddIdeaButton'));

    getByTestId('ideasFormForm');

    const description =
      'Moving Icebox up from Episode 2 does come with a trade-off: we’ll be delaying the release of our newest Agent for two weeks';

    userEvent.type(getByTestId('ideasFormDescriptionInput'), description);

    getByText(`Characters remaining: ${MAX_CHAR_LIMIT - description.length}`);
  });

  it('should return user back to page when they click cancel', () => {
    const { getByTestId, queryByTestId } = render(<IdeasForm />);
    userEvent.click(getByTestId('ideasFormAddIdeaButton'));
    getByTestId('ideasFormForm');

    userEvent.click(getByTestId('ideasFormCancelButton'));

    expect(queryByTestId('ideasFormForm')).toBe(null);
  });
});
