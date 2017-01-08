import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { AppContainer, CounterContainer } from './containers';

export default (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={CounterContainer} />
  </Route>
);
