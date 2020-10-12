import React from 'react';
import { IdeaContextProvider } from '../../contexts/IdeaContext';
import { IdeaBoardPage } from '../IdeaBoardPage';
import { IdeasList } from '../IdeasList';

import * as S from './styles';

// do you need react router, if not, remove it

const App = () => {
  return (
    <IdeaContextProvider>
      <S.GlobalStyle />
      <IdeaBoardPage />
      <IdeasList />
    </IdeaContextProvider>
  );
};

export default App;
