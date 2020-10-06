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

      <S.SortLabel htmlFor="sort-by">
        Sort by:
        <S.DropDownMenu id="sort-by" name="sort-by">
          <option>Title (A-Z)</option>
          <option>Title (Z-A)</option>
          <option>Time created (earliest)</option>
          <option>Time created (latest)</option>
        </S.DropDownMenu>
      </S.SortLabel>
    </>
  );
};
