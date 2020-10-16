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
  const handleUpdate = () => {
    setEditing(true);
  };

  const handleChangeTitle = (event) => {
    setUpdatedTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setUpdatedDescription(event.target.value);
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setUpdatedIdea({ ...updatedIdea, [name]: value, id, updatedTime: new Date().toLocaleTimeString() });
  //   console.log(updatedIdea);
  // };

  function handleSubmit(event) {
    console.log('clicked');
    event.preventDefault();
    const andyUpdated = {
      // original idea
      ...idea,
      // overwriting some parts of the original idea
      title: updatedTitle,
      description: updatedDescription,
      id,
      time: new Date().toLocaleTimeString(),
      updated: true
    };
    // const updatedIdea = {
    //   // all the original idea values
    //   ...idea,
    //   // only shit that has changed
    //   title: updatedTitle,
    //   description: updatedDescription,
    //   updated: new Date().toLocaleTimeString()
    // };

    // when created NO updated property
    // when editing, ADD updated property
    updateIdea(andyUpdated, id);
    setEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <label htmlFor="title-input">
            <input type="text" defaultValue={title} name="title" onChange={handleChangeTitle} autoComplete="off" />
          </label>
          <label htmlFor="description-input">
            <textarea
              type="text"
              defaultValue={description}
              name="description"
              onChange={handleChangeDescription}
              rows="5"
              cols="33"
            />
          </label>
          <button type="button" onClick={handleSubmit}>
            Update Idea
          </button>
        </div>
      ) : (
        <S.Wrapper>
          <S.Title>{title}</S.Title>
          <S.Paragraph>{description}</S.Paragraph>
          <p>
            Time {idea.updated ? 'updated' : 'created'}: {time}
          </p>
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
