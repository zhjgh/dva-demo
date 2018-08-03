import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Products from './routes/Product/';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
