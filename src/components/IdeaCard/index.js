import React, { useContext, useState } from 'react';
import { shape, string } from 'prop-types';
import { IdeaContext } from '../../contexts/IdeaContext';
import * as S from './styles';

export const IdeaCard = ({ idea }) => {
  const { title, description, id, time } = idea;
  const { updateIdea, removeIdea } = useContext(IdeaContext);
  const [isEditing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [characterCounter, setCharacterCounter] = useState(0);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setCharacterCounter(0);
  };

  const handleChangeTitle = (event) => {
    setUpdatedTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setUpdatedDescription(event.target.value);
    setCharacterCounter(event.target.value.length);
  };

  const handleUpdate = () => {
    const updatedIdea = {
      ...idea,
      title: updatedTitle,
      description: updatedDescription,
      time: new Date().toLocaleTimeString(),
      updated: true
    };

    console.log({ updatedTitle, updatedDescription });
    updateIdea(updatedIdea, id); // just need to check this is called with the right values
    // i.e. expect(updateIdea).toHaveBeenCalledWith();
    setEditing(false);
    console.log({ updatedIdea });
  };

  return (
    <div>
      {isEditing ? (
        <S.CardWrapper data-testid="updateIdeaForm">
          <S.Label htmlFor="title">
            <S.TitleInput
              data-testid="titleInput"
              type="text"
              defaultValue={title}
              name="title"
              onChange={handleChangeTitle}
              autoComplete="off"
              autoFocus
            />
          </S.Label>
          <S.Label htmlFor="description">
            <S.DescriptionInput
              data-testid="descriptionInput"
              type="text"
              defaultValue={description}
              name="description"
              onChange={handleChangeDescription}
              maxLength="140"
            />
            {characterCounter > 120 && (
              <S.CharacterCounter>Characters remaining: {140 - characterCounter}</S.CharacterCounter>
            )}
          </S.Label>
          <S.ButtonWrapper>
            <S.Button data-testid="updateIdeaButton" type="button" onClick={handleUpdate}>
              Update Idea
            </S.Button>
            <S.Button data-testid="cancelButton" type="button" onClick={handleCancelEdit}>
              Cancel
            </S.Button>
          </S.ButtonWrapper>
        </S.CardWrapper>
      ) : (
        <S.CardWrapper data-testid="ideaCard">
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Time>
            Time {idea.updated ? 'updated' : 'created'}: {time}
          </S.Time>

          <S.ButtonWrapper>
            <S.Button
              data-testid="removeButton"
              type="button"
              onClick={() => {
                removeIdea(id);
                console.log('clicked');
              }}
            >
              Delete
            </S.Button>
            <S.Button data-testid="editButton" type="button" onClick={handleEdit}>
              Edit
            </S.Button>
          </S.ButtonWrapper>
        </S.CardWrapper>
      )}
    </div>
  );
};

IdeaCard.propTypes = {
  idea: shape({
    description: string.isRequired,
    id: string.isRequired,
    time: string.isRequired,
    title: string.isRequired
  }).isRequired
};
