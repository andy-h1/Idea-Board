import React, { useContext } from 'react';
import { IdeaContext } from '../../contexts/IdeaContext';

export const IdeaBoardPage = () => {
  const { ideas } = useContext(IdeaContext);
  return (
    <div>
      <h1>Idea Board Page</h1>
      <p> Currently you&apos;ve come up with {ideas.length} ideas!!</p>
    </div>
  );
};
