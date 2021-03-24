import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../pages/Home';
import Welcome from '../pages/Welcome';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;