import React from 'react';
import './../css/Nav.css';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className={`nav content`} id='nav'>
      <div className='nav-left'>
        <div className='nav-img-containt'>
          <img
            src={require('./../assets/logo-images/Asset 16@4x.png')}
            alt='Little Lemon Logo'
            className='nav-logo'
          />
        </div>
      </div>

      <div className={`nav-right`}>
        <hr className='mb fw' />
        <NavLink exact to='/' className='nav-link' activeClassName='active'>
          Home
        </NavLink>
        <hr className='mb fw' />
        <NavLink to='/about' className='nav-link' activeClassName='active'>
          About
        </NavLink>
        <hr className='mb fw' />
        <NavLink to='/menu' className='nav-link' activeClassName='active'>
          Menu
        </NavLink>
        <hr className='mb fw' />
        <NavLink to='/booking' className='nav-link' activeClassName='active'>
          Reservations
        </NavLink>
        <hr className='mb fw' />
        <NavLink to='/order' className='nav-link' activeClassName='active'>
          Order Online
        </NavLink>
        <hr className='mb fw' />
        <NavLink to='/login' className='nav-link' activeClassName='active'>
          Login
        </NavLink>
        <hr className='mb fw' />
      </div>
    </nav>
  );
};

export default Nav;
