import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from'../App.js';
import Films from'./Films.jsx';

class Navigation extends Component {
render() {
    return(
     <BrowserRouter>
       <div>
         <Route path="/" component={App} />
         <Route path="/Films" component={Films} />
       </div>
     </BrowserRouter>
     );
 }
}

export default Navigation;
