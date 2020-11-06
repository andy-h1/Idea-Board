import React, { useContext, useState } from 'react';
import { IdeaContext } from '../../contexts/IdeaContext';
import * as S from './styles';

export const MAX_CHAR_LIMIT = 140;
export const MIN_CHAR_LIMIT = 120;

export const IdeasForm = () => {
  const { addIdea } = useContext(IdeaContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [characterCounter, setCharacterCounter] = useState(0);
  const [isAdding, setAdding] = useState(false);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
    setCharacterCounter(event.target.value.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addIdea(title, description);
    setTitle('');
    setDescription('');
    setAdding(false);
  };

  return (
    <S.FormWrapper>
      {isAdding ? (
        <S.Form data-testid="ideasFormForm">
          <S.Label htmlFor="title">
            <S.TitleInput
              data-testid="ideasFormTitleInput"
              id="title"
              name="title"
              type="text"
              placeholder="Idea title"
              value={title}
              onChange={handleTitle}
              autoFocus
              autoComplete="off"
              required
            />
          </S.Label>

          <S.Label htmlFor="description">
            <S.DescriptionInput
              data-testid="ideasFormDescriptionInput"
              id="description"
              name="description"
              type="text"
              placeholder="Add your ideas here..."
              value={description}
              onChange={handleDescription}
              maxLength={MAX_CHAR_LIMIT}
              required
            />

            {characterCounter > MIN_CHAR_LIMIT && (
              <S.CharacterCounter>Characters remaining: {MAX_CHAR_LIMIT - characterCounter}</S.CharacterCounter>
            )}
          </S.Label>

          <S.ButtonWrapper>
            <S.Button
              data-testid="ideasFormSubmitButton"
              id="submit"
              name="add-idea"
              type="submit"
              value="add-idea"
              onClick={handleSubmit}
            >
              Add
            </S.Button>
            <S.Button data-testid="ideasFormCancelButton" type="button" name="cancel" onClick={() => setAdding(false)}>
              Cancel
            </S.Button>
          </S.ButtonWrapper>
        </S.Form>
      ) : (
        <S.AddIdeaButton data-testid="ideasFormAddIdeaButton" type="button" onClick={() => setAdding(true)}>
          Add Idea
        </S.AddIdeaButton>
      )}
    </S.FormWrapper>
  );
};
