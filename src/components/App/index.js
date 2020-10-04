import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IdeaContextProvider } from '../../contexts/IdeaContext';
import { IdeaBoardPage } from '../IdeaBoardPage';
import { IdeasList } from '../IdeasList';

import * as S from './styles';

const App = () => {
  return (
    <BrowserRouter>
      <S.GlobalStyle />
      <Switch>
        <IdeaContextProvider>
          <Route exact path="/" component={IdeaBoardPage} />
          <IdeasList />
        </IdeaContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
