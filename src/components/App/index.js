import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IdeaBoardPage } from '../IdeaBoardPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IdeaBoardPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
