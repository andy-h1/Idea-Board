import React, { useContext } from 'react';
import { IdeaContext } from '../../contexts/IdeaContext';
import { IdeaCard } from '../IdeaCard';
import * as S from './styles';

export const IdeasList = () => {
  const { ideas, sortIdea } = useContext(IdeaContext);

  const handleChange = (event) => {
    console.log(event.target.value);
    sortIdea(event.target.value);
  };

  return ideas.length ? (
    <S.Wrapper>
      <S.SortLabel htmlFor="sort-by">
        Sort by:
        <S.DropDownMenu id="sort-by" name="sort-by" onChange={handleChange} data-testid="ideasListdropdown">
          <option value="titleAsc">Title (A-Z)</option>
          <option value="titleDesc">Title (Z-A)</option>
          <option value="timeAsc">Time created (earliest)</option>
          <option value="timeDesc">Time created (latest)</option>
        </S.DropDownMenu>
      </S.SortLabel>
      <S.List data-testid="ideasListList">
        {ideas.map((idea) => (
          <IdeaCard idea={idea} key={idea.id} />
        ))}
      </S.List>
    </S.Wrapper>
  ) : (
    <S.TextWrapper>
      <p>An idea that is developed and put into action is more important than an idea that exists only as an idea...</p>
    </S.TextWrapper>
  );
};
