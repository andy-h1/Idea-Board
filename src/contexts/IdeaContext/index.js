import React, { createContext, useState, useEffect } from 'react';
// why v1 over v4
import { v4 as uuid } from 'uuid';

export const IdeaContext = createContext();

// eslint-disable-next-line react/prop-types
export const IdeaContextProvider = ({ children }) => {
  const [ideas, setIdeas] = useState(() => {
    const localData = localStorage.getItem('ideas');
    console.log({ localData });
    return localData ? JSON.parse(localData) : [];
  });

  console.log({ ideas });
  const addIdea = (title, description) => {
    setIdeas([...ideas, { title, description, id: uuid(), time: new Date().toLocaleTimeString() }]);
  };
  const removeIdea = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  const updateIdea = (updatedIdea, id) => {
    setIdeas(ideas.map((idea) => (idea.id === id ? updatedIdea : idea)));
  };

  // const updateIdea = (updatedIdea, id) => {
  //   setIdeas([...ideas, { updatedIdea, updated: new Date().toLocaleTimeString() }]);
  //   ideas.map((idea) => {
  //     return idea.id === id ? updatedIdea : idea;
  //   })
  // };

  const sortIdea = (sortOption) => {
    const sortedArray = [...ideas].sort((a, b) => {
      if (sortOption === 'titleAsc') {
        return a.title.toUpperCase() > b.title.toUpperCase() ? -1 : 1;
      }
      if (sortOption === 'titleDesc') {
        return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1;
      }
      if (sortOption === 'timeAsc') {
        return a.time > b.time ? -1 : 1;
      }
      if (sortOption === 'timeDesc') {
        return a.time < b.time ? -1 : 1;
      }
      return 0;
    });
    console.log(sortedArray);
    setIdeas(sortedArray);
  };

  useEffect(() => {
    localStorage.setItem('ideas', JSON.stringify(ideas));
  }, [ideas]);

  return (
    <IdeaContext.Provider value={{ ideas, addIdea, removeIdea, sortIdea, updateIdea }}>{children}</IdeaContext.Provider>
  );
};
