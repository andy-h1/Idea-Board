import React, { createContext, useState, useEffect } from 'react';
// why v1 over v4
import { v1 as uuid } from 'uuid';

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
    setIdeas(
      ideas.map((idea) => {
        return idea.id === id ? updatedIdea : idea;
      })
    );
  };

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
    <IdeaContext.Provider value={{ ideas, addIdea, removeIdea, sortIdea, updateIdea }}>
      {children}
    </IdeaContext.Provider>
  );
};

// { title: "What's the big idea?", description: 'Not sure doc...', id: 1 },
// { title: 'Is Java and Javascript related?', description: "No it's not", id: 2 }
// const sortIdea = (option) => {
//   const sortedArray = [...ideas].sort(a, b);
//   switch (option) {
//     case 'title_asc':
//       return a.title < b.title;
//   }
// };

// const sortIdeaTitle = [...ideas].sort((a, b) => {
//   if (a.title < b.title) {
//     return -1;
//   }
//   if (a.title > b.title) {
//     return 1;
//   }
//   return 0;
// });

// const sortIdeaTime = ideas.sort((a, b) => {
//   if (a.time < b.time) {
//     return -1;
//   }
//   return 0;
// });
