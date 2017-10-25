import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from '../../pages/home/page';
import AboutPage from '../../pages/about/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={AboutPage} />
  </Route>
);
