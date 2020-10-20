import React, { useContext, useState } from 'react';
import { shape, string } from 'prop-types';
import { IdeaContext } from '../../contexts/IdeaContext';
import * as S from './styles';

export const IdeasCard = ({ idea }) => {
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
        <S.CardWrapper>
          <S.Label htmlFor="title">
            <S.TitleInput
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
              type="text"
              defaultValue={description}
              name="description"
              onChange={handleChangeDescription}
              maxLength="140"
              rows="5"
              cols="33"
            />
            {characterCounter > 120 && (
              <S.CharacterCounter>Characters remaining: {140 - characterCounter}</S.CharacterCounter>
            )}
          </S.Label>
          <S.ButtonWrapper>
            <S.Button type="button" onClick={handleUpdate}>
              Update Idea
            </S.Button>
            <S.Button type="button" onClick={handleCancelEdit}>
              Cancel
            </S.Button>
          </S.ButtonWrapper>
        </S.CardWrapper>
      ) : (
        <S.CardWrapper>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Time>
            Time {idea.updated ? 'updated' : 'created'}: {time}
          </S.Time>

          <S.ButtonWrapper>
            <S.Button type="button" onClick={() => removeIdea(id)}>
              Delete
            </S.Button>
            <S.Button type="button" onClick={handleEdit}>
              Edit
            </S.Button>
          </S.ButtonWrapper>
        </S.CardWrapper>
      )}
    </div>
  );
};

IdeasCard.propTypes = {
  idea: shape({
    id: string.isRequired,
    title: string.isRequired,
    description: string.isRequired
  }).isRequired
};
