import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export const IdeaContext = createContext();

// eslint-disable-next-line react/prop-types
export const IdeaContextProvider = ({ children }) => {
  const [ideas, setIdeas] = useState(() => {
    const localData = localStorage.getItem('ideas');
    return localData ? JSON.parse(localData) : [];
  });

  const addIdea = (title, description) => {
    setIdeas([...ideas, { title, description, id: uuid(), time: new Date().toLocaleTimeString() }]);
  };
  const removeIdea = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  const updateIdea = (updatedIdea, id) => {
    setIdeas(ideas.map((idea) => (idea.id === id ? updatedIdea : idea)));
  };

  const sortIdea = (sortOption) => {
    const sortedArray = [...ideas].sort((a, b) => {
      if (sortOption === 'titleAsc') {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === 'titleDesc') {
        return b.title.localeCompare(a.title);
      }
      if (sortOption === 'timeAsc') {
        return a.time.localeCompare(b.time);
      }
      if (sortOption === 'timeDesc') {
        return b.time.localeCompare(a.time);
      }
      return 0;
    });
    setIdeas(sortedArray);
  };

  useEffect(() => {
    localStorage.setItem('ideas', JSON.stringify(ideas));
  }, [ideas]);

  return (
    <IdeaContext.Provider value={{ ideas, addIdea, removeIdea, sortIdea, updateIdea }}>{children}</IdeaContext.Provider>
  );
};
