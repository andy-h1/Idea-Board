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

    updateIdea(updatedIdea, id);
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <S.CardWrapper data-testid="ideaCardForm">
          <S.Label htmlFor="title">
            <S.TitleInput
              data-testid="ideaCardTitleInput"
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
              data-testid="ideaCardDescriptionInput"
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
            <S.Button data-testid="ideaCardUpdateButton" type="button" onClick={handleUpdate}>
              Update Idea
            </S.Button>
            <S.Button data-testid="ideaCardCancelButton" type="button" onClick={handleCancelEdit}>
              Cancel
            </S.Button>
          </S.ButtonWrapper>
        </S.CardWrapper>
      ) : (
        <S.CardWrapper data-testid="ideaCardCard">
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Time>
            Time {idea.updated ? 'updated' : 'created'}: {time}
          </S.Time>

          <S.ButtonWrapper>
            <S.Button
              data-testid="ideaCardRemoveButton"
              type="button"
              onClick={() => {
                removeIdea(id);
              }}
            >
              Delete
            </S.Button>
            <S.Button data-testid="ideaCardEditButton" type="button" onClick={handleEdit}>
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
