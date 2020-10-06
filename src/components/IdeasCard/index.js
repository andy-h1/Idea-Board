import React, { useContext } from 'react';
import { shape, string } from 'prop-types';
import { IdeaContext } from '../../contexts/IdeaContext';
import * as S from './styles';

export const IdeasCard = ({ idea: { title, description, id, date, time } }) => {
  const { removeIdea } = useContext(IdeaContext);

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Paragraph>{description}</S.Paragraph>
      <p>Date created: {date}</p>
      <p>Time created: {time}</p>
      <button type="button" onClick={() => removeIdea(id)}>
        Delete
      </button>
    </S.Wrapper>
  );
};

IdeasCard.propTypes = {
  idea: shape({
    id: string.isRequired,
    title: string.isRequired,
    description: string.isRequired
  }).isRequired
};
