import React, { useContext, useState } from 'react';
import { IdeaContext } from '../../contexts/IdeaContext';
import { IdeasForm } from '../IdeasForm';
import * as S from './styles';

export const IdeaBoardPage = () => {
  const { ideas } = useContext(IdeaContext);
  const [isAdding, setAdding] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.Title>Idea Board Page</S.Title>
        <p>Currently you&apos;ve come up with {ideas.length} ideas!!</p>
      </S.Wrapper>
      {isAdding ? (
        <IdeasForm />
      ) : (
        <button type="button" onClick={() => setAdding(true)}>
          Add Idea
        </button>
      )}
    </>
  );
};
