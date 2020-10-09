import React, { useContext } from 'react';
import { IdeaContext } from '../../contexts/IdeaContext';
import * as S from './styles';

export const IdeaBoardPage = () => {
  const { ideas } = useContext(IdeaContext);

  return (
    <>
      <S.Wrapper>
        <S.Title>Idea Board Page</S.Title>
        <p> Currently you&apos;ve come up with {ideas.length} ideas!!</p>
      </S.Wrapper>

    </>
  );
};
