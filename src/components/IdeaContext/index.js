import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';

export const IdeaContext = createContext();

export const IdeaContextProvider = () => {
  const [ideas, setIdeas] = useState([
    { title: "What's the big idea?", description: 'Not sure doc...', id: 1 },
    { title: 'Is Java and Javascript related?', description: "No it's not", id: 2 }
  ]);
  const addIdea = (title, description) => {
    setIdeas([...ideas, { title, description, id: uuid() }]);
  };
  const removeIdea = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };
  return <IdeaContext.Provider value={{ ideas, addIdea, removeIdea }}>{props.children}</IdeaContext.Provider>;
};
