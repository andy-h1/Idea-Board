import React from 'react';
import { IdeaContextProvider } from '../../contexts/IdeaContext';
import { IdeaBoardPage } from '../IdeaBoardPage';
import { IdeasForm } from '../IdeasForm';
import { IdeasList } from '../IdeasList';

import * as S from './styles';

const App = () => {
  // 1. render the App
  // 2. Click add button
  // 3. fill in form (userEvent)
  // 4. click the add button
  // getByTestId
  // getAllByTestId = [{}, {}, {}]
  // expect the last idea to have the same title as the title I just added

  // index.test.jds
  // write a snapshot
  // choose what functioanlity you want to test
  // try ttesting it

  return (
    <IdeaContextProvider>
      <S.GlobalStyle />
      <IdeaBoardPage />
      <IdeasForm />
      <IdeasList />
    </IdeaContextProvider>
  );
};

export default App;
