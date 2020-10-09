import React, { useContext, useState } from 'react';
import { shape, string } from 'prop-types';
import { IdeaContext } from '../../contexts/IdeaContext';
import { IdeasForm } from '../IdeasForm';
import * as S from './styles';

export const IdeasCard = ({ idea: { title, description, id, time } }) => {
  const { updateIdea, removeIdea } = useContext(IdeaContext);
  const [isEditing, setEditing] = useState(false);
  const handleUpdate = () => {
    setEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <IdeasForm />
      ) : (
        <S.Wrapper>
          <S.Title>{title}</S.Title>
          <S.Paragraph>{description}</S.Paragraph>
          <p>Time created: {time}</p>
          <button type="button" onClick={() => removeIdea(id)}>
            Delete
          </button>
          <button type="button" onClick={handleUpdate}>
            Edit
          </button>
        </S.Wrapper>
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
