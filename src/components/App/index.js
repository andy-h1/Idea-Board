import React from 'react';
import { IdeaContextProvider } from '../../contexts/IdeaContext';
import { IdeaBoardPage } from '../IdeaBoardPage';
import { IdeasForm } from '../IdeasForm';
import { IdeasList } from '../IdeasList';

import * as S from './styles';

const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <IdeaContextProvider>
        <IdeaBoardPage />
        <IdeasForm />
        <IdeasList />
      </IdeaContextProvider>
    </>
  );
};

export default App;
