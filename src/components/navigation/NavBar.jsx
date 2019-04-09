import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
     <div className='tr mt4 '>
       <NavLink to='/' className='pa3 ma2 bg-white'>Home</NavLink>
       <NavLink to='Films'className='pa3 ma2 bg-white'>Films</NavLink>
     </div>
  );
}

export default NavBar;
