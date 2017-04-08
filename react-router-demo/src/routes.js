import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import Home from './Home';
import Topic from './Topic';

function Routers() {
  return(
    <Router history={ browserHistory }>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='topic/:id' component={Topic}/>
      </Route>
    </Router>
  )
}

export default Routers;
