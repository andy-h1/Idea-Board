import React, { useContext, useState } from 'react';
import { IdeaContext } from '../../contexts/IdeaContext';
import { IdeasCard } from '../IdeasCard';
import * as S from './styles';

export const IdeasList = () => {
  const { ideas, sortIdea } = useContext(IdeaContext);
  const [sortBy, setSortBy] = useState('title_asc');
  const handleChange = (event) => {
    setSortBy(event.target.value);
    console.log(sortBy);
    sortIdea(sortBy);
  };

  return ideas.length ? (
    <S.Wrapper>
      <S.SortLabel htmlFor="sort-by">
        Sort by:
        <S.DropDownMenu id="sort-by" name="sort-by" onChange={handleChange}>
          <option value="title_asc">Title (A-Z)</option>
          <option value="title_desc">Title (Z-A)</option>
          <option value="time_asc">Time created (earliest)</option>
          <option value="time_desc">Time created (latest)</option>
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
