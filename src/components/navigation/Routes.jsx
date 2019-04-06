import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from'../../App.js';
import Films from'../films/Films.jsx';
import Error from'../utilities/Error.jsx';
import NavBar from './NavBar.jsx'

class Routes extends Component {
render() {
    return(
     <BrowserRouter>
     <div>
       <NavBar />
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
