import React, { createContext, useState, useEffect } from 'react';
import { v1 as uuid } from 'uuid';

export const IdeaContext = createContext();

// eslint-disable-next-line react/prop-types
export const IdeaContextProvider = ({ children }) => {
  const [ideas, setIdeas] = useState(() => {
    const localData = localStorage.getItem('ideas');
    console.log(localData);
    return localData ? JSON.parse(localData) : [];
  });
  console.log(ideas);
  const addIdea = (title, description) => {
    setIdeas([...ideas, { title, description, id: uuid(), date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() }]);
  };
  const removeIdea = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('ideas', JSON.stringify(ideas));
  }, [ideas]);

  return <IdeaContext.Provider value={{ ideas, addIdea, removeIdea }}>{children}</IdeaContext.Provider>;
};

// { title: "What's the big idea?", description: 'Not sure doc...', id: 1 },
// { title: 'Is Java and Javascript related?', description: "No it's not", id: 2 }
