import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/simple-react-github-app" exact component={Main} />
        <Route
          path="/simple-react-github-app/repository/:repository"
          component={Repository}
        />
      </Switch>
    </BrowserRouter>
  );
}
