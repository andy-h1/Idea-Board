import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IdeaContextProvider } from '../../contexts/IdeaContext';
import { IdeaBoardPage } from '../IdeaBoardPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <IdeaContextProvider>
          <Route exact path="/" component={IdeaBoardPage} />
        </IdeaContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
