import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  var navbarStyle={
    backgroundColor: '#FFF8DC',
    fontFamily:'Permanent Marker, cursive',
        
  };
  var linkStyle={
    color: 'black'
  };
  return(
    <div className='navbar' style= {navbarStyle}>
      <Link to='/' style={linkStyle}>Home</Link>
      <h1>Lets Paint</h1>
      <Link to='/art' style={linkStyle}>Art Collection</Link>
    </div>
  );
}

export default Header;