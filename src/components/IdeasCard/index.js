import React, { useContext } from 'react';
import { number, shape, string } from 'prop-types';
import { IdeaContext } from '../../contexts/IdeaContext';
import * as S from './styles';

export const IdeasCard = ({ idea: { title, description, id } }) => {
  const { removeIdea } = useContext(IdeaContext);
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Paragraph>{description}</S.Paragraph>
      <button type="button" onClick={() => removeIdea(id)}>
        Delete
      </button>
    </S.Wrapper>
  );
};

IdeasCard.propTypes = {
  idea: shape({
    id: number.isRequired,
    title: string.isRequired,
    description: string.isRequired
  }).isRequired
};
