import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/art'>Art Collection</Link>
    </div>
  );
}

export default Header;