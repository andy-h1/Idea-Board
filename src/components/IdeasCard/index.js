import React, { useContext, useState } from 'react';
import { shape, string } from 'prop-types';
import { IdeaContext } from '../../contexts/IdeaContext';
import * as S from './styles';

export const IdeasCard = ({ idea: { title, description, id, time } }) => {
  const { updateIdea, removeIdea } = useContext(IdeaContext);
  const [isEditing, setEditing] = useState(false);
  const [updatedValues, setUpdatedValues] = useState();
  const handleUpdate = () => {
    setEditing(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedValues({
      ...updatedValues,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateIdea(updatedValues, id);
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <label>
            <input type="text" value={title} onChange={handleChange} autoComplete="off" />
          </label>
          <label>
            <textarea type="text" value={description} onChange={handleChange} rows="5" cols="33" />
          </label>
          <button type="submit" onSubmit={handleSubmit}>
            Update Idea
          </button>
        </div>
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
