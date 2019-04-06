import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from'../App.js';
import Films from'./Films.jsx';
import Error from'./Error.jsx';
import Navigation from './Navigation.jsx'

class Routes extends Component {
render() {
    return(
     <BrowserRouter>
     <div>
       <Navigation />
       <Switch>
         <Route path="/" component={App} exact />
         <Route path="/Films" component={Films} />
         <Route component={Error} />
       </Switch>
     </div>
     </BrowserRouter>
     );
 }
}

export default Routes;
