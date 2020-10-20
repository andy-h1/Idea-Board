import React, { useContext, useState } from 'react';
import { IdeaContext } from '../../contexts/IdeaContext';
import { IdeasCard } from '../IdeasCard';
import * as S from './styles';

export const IdeasList = () => {
  const { ideas, sortIdea } = useContext(IdeaContext);
  const [sortBy, setSortBy] = useState('titleAsc');
  const handleChange = (event) => {
    setSortBy(event.target.value);
    sortIdea(sortBy);
  };

  return ideas.length ? (
    <S.Wrapper>
      <S.SortLabel htmlFor="sort-by">
        Sort by:
        <S.DropDownMenu id="sort-by" name="sort-by" onChange={handleChange}>
          <option value="titleAsc">Title (A-Z)</option>
          <option value="titleDesc">Title (Z-A)</option>
          <option value="timeAsc">Time created (earliest)</option>
          <option value="timeDesc">Time created (latest)</option>
        </S.DropDownMenu>
      </S.SortLabel>
      <S.List>
        {ideas.map((idea) => (
          <IdeasCard idea={idea} key={idea.id} />
        ))}
      </S.List>
    </S.Wrapper>
  ) : (
    <S.TextWrapper>
      <p>An idea that is developed and put into action is more important than an idea that exists only as an idea...</p>
    </S.TextWrapper>
  );
};
