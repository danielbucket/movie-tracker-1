import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink activeClassName='selected' to='/'>Home</NavLink>
      <NavLink activeClassName='selected' to='/login'>Login</NavLink>
      <NavLink activeClassName='selected' to='/signup'>Signup</NavLink>
    </div>
  );
}
