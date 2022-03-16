import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'


export default function NavBar() {
  return (
    <nav id='nav-bar'>

      <NavLink to='/' exact={true} activeClassName='active'>
        <div className='title-logo' alt='logo'>
          𝑬𝒗𝒆𝒓𝒘𝒓𝒊𝒕𝒆
        </div>
      </NavLink>
      <div className='nav-bar-right-section'>

        <NavLink id='nav-btns' to='/' exact={true} activeClassName='active'>
          <i className="fas fa-house" />
          Home
        </NavLink>

        <NavLink id='nav-btns' to='/notebooks' exact={true} activeClassName='active'>
        <i className="fa-solid fa-notebook"></i>
          Notebooks
        </NavLink>

        <NavLink id='nav-btns' to='/notes' exact={true} activeClassName='active'>
        <i className="fa-solid fa-note"></i>
        Notes
        </NavLink>

        <LogoutButton id='nav-btns' />

      </div>

    </nav>
  );
}
