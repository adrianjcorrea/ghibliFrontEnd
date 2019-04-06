import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from'../App.js';
import Films from'./Films.jsx';
import Error from'./Error.jsx';

class Navigation extends Component {
render() {
    return(
     <BrowserRouter>
       <Switch>
         <Route path="/" component={App} exact />
         <Route path="/Films" component={Films} />
         <Route component={Error} />
       </Switch>
     </BrowserRouter>
     );
 }
}

export default Navigation;
