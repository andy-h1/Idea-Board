import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test-utils';
import { IdeaCard } from '.';

const idea = {
  title: 'League of Legends',
  description: 'MOBA',
  id: '1',
  time: '00:00:00'
};

const defaultContext = {
  updateIdea: () => 'idea updated',
  removeIdea: () => 'idea removed'
};

describe('Idea Card Component', () => {
  it('should render', () => {
    const { container } = render(<IdeaCard idea={idea} />, defaultContext);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render form when user clicks edit', () => {
    const { getByTestId } = render(<IdeaCard idea={idea} />, defaultContext);
    userEvent.click(getByTestId('editButton'));
    expect(getByTestId('updateIdeaForm'));
  });

  it('should render updated time when card has been updated', () => {
    const updatedIdea = {
      title: 'FIFA',
      description: 'Football Simulator',
      id: '2',
      time: new Date('01/01/20').toLocaleTimeString(),
      updated: true
    };

    const { getByTestId, getByText } = render(<IdeaCard idea={updatedIdea} />, defaultContext);
    getByTestId('ideaCard');
    getByText(`Time updated: ${updatedIdea.time}`);
  });

  it('should call updateIdea with the correct values', () => {
    const updateIdea = jest.fn();
    const { getByTestId, queryByTestId } = render(<IdeaCard idea={idea} />, { updateIdea });
    userEvent.click(getByTestId('editButton'));
    getByTestId('updateIdeaForm');

    const updatedTitle = 'Rust';
    const updatedDescription = 'Survival Game';
    const time = new Date().toLocaleTimeString();

    userEvent.clear(getByTestId('titleInput'));
    userEvent.type(getByTestId('titleInput'), updatedTitle);
    userEvent.clear(getByTestId('descriptionInput'));
    userEvent.type(getByTestId('descriptionInput'), updatedDescription);
    userEvent.click(getByTestId('updateIdeaButton'));
    expect(updateIdea).toHaveBeenCalledWith(
      { ...idea, title: updatedTitle, description: updatedDescription, time, id: idea.id, updated: true },
      idea.id
    );
    expect(queryByTestId('updateIdeaForm')).toBe(null);
  });

  it('should exit the update form when user clicks cancel button', () => {
    const { getByTestId, queryByTestId } = render(<IdeaCard idea={idea} />, defaultContext);
    userEvent.click(getByTestId('editButton'));
    getByTestId('updateIdeaForm');

    userEvent.click(getByTestId('cancelButton'));
    expect(queryByTestId('updateIdeaForm')).toBe(null);
  });

  it('should show the users characters remaining in textarea', () => {
    const { getByText, getByTestId } = render(<IdeaCard idea={idea} />, defaultContext);
    userEvent.click(getByTestId('editButton'));
    getByTestId('updateIdeaForm');

    const description =
      'Moving Icebox up from Episode 2 does come with a trade-off: we’ll be delaying the release of our newest Agent for two weeks';

    userEvent.clear(getByTestId('descriptionInput'));
    userEvent.type(getByTestId('descriptionInput'), description);
    getByText(`Characters remaining: ${140 - description.length}`);
  });

  it('should call remove idea when user clicks delete button', () => {
    const removeIdea = jest.fn();
    const { getByTestId } = render(<IdeaCard idea={idea} />, { ...defaultContext, removeIdea });
    userEvent.click(getByTestId('removeButton'));
    expect(removeIdea).toHaveBeenCalledWith(idea.id);
  });
});
