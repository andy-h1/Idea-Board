import React, { useContext } from 'react';
import { IdeaContext } from '../../contexts/IdeaContext';
import { IdeasCard } from '../IdeasCard';
import * as S from './styles';

export const IdeasList = () => {
  const { ideas } = useContext(IdeaContext);
  return ideas.length ? (
    <S.Wrapper>
      <S.List>
        {ideas.map((idea) => (
          <IdeasCard idea={idea} key={idea.id} />
        ))}
      </S.List>
    </S.Wrapper>
  ) : (
    <div>
      <p>An idea that is developed and put into action is more important than an idea that exists only as an idea...</p>
    </div>
  );
};
