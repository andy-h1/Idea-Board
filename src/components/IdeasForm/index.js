import React, { useContext, useState } from 'react';
import { IdeaContext } from '../../contexts/IdeaContext';
import * as S from './styles';

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
  };

  const handleChange = () => {
    console.log('clicked');
    setAdding(false);
  };

  return (
    <S.FormWrapper>
      {isAdding ? (
        <S.Form onSubmit={handleSubmit}>
          <S.Label htmlFor="title">
            <S.TitleInput
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
            <S.TextArea
              id="description"
              name="description"
              type="text"
              placeholder="Add your ideas here..."
              rows="5"
              cols="33"
              value={description}
              onChange={handleDescription}
              maxLength="140"
              required
            />
            {characterCounter > 120 && (
              <S.CharacterCounter>Characters remaining: {140 - characterCounter}</S.CharacterCounter>
            )}
          </S.Label>

          <S.ButtonWrapper>
            <S.Button id="submit" name="add-idea" type="submit" value="add-idea" onClick={handleChange}>
              Add
            </S.Button>
            <S.Button type="button" name="cancel" onClick={handleChange}>
              Cancel
            </S.Button>
          </S.ButtonWrapper>
        </S.Form>
      ) : (
        <S.AddIdeaButton type="button" onClick={() => setAdding(true)}>
          Add Idea
        </S.AddIdeaButton>
      )}
    </S.FormWrapper>
  );
};
