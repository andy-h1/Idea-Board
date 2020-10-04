import React, { useContext } from 'react';
import { number, shape, string } from 'prop-types';
import { IdeaContext } from '../../contexts/IdeaContext';

export const IdeasCard = ({ idea: { title, description, id } }) => {
  const { removeIdea } = useContext(IdeaContext);
  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
      <button type="button" onClick={() => removeIdea(id)}>
        Delete
      </button>
    </li>
  );
};

IdeasCard.propTypes = {
  idea: shape({
    id: number.isRequired,
    title: string.isRequired,
    description: string.isRequired
  }).isRequired
};
