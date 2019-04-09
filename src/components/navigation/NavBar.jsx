import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
     <div id='navBar'>
       <NavLink to='/' id='navLink'>Home</NavLink>
       <NavLink to='Films'id='navLink'>Films</NavLink>
     </div>
  );
}

export default NavBar;
