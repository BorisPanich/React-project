import React from 'react';
import navbar from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from './Friends/FriendsContainer';


const NavBar = () => {

  return (
    <nav className={navbar.nav}>
      <ul className={navbar.nav__list}>
        <li className={navbar.nav__item}>
          <NavLink to='/profile' className={navbar.nav__link} activeClassName={navbar.active}>Profile</NavLink>
        </li>
        <li className={navbar.nav__item}>
          <NavLink to='/dialogs' className={navbar.nav__link} activeClassName={navbar.active}>Messages</NavLink>
        </li>
        <li className={navbar.nav__item}>
          <NavLink to='/news' className={navbar.nav__link} activeClassName={navbar.active}>News</NavLink>
        </li>
        <li className={navbar.nav__item}>
          <NavLink to='/music' className={navbar.nav__link} activeClassName={navbar.active}>Music</NavLink>
        </li>
        <li className={navbar.nav__item}>
          <NavLink to='/settings' className={navbar.nav__link} activeClassName={navbar.active}>Settings</NavLink>
        </li>
        <li className={navbar.nav__item}>
          <NavLink to='/users' className={navbar.nav__link} activeClassName={navbar.active}>Find friends</NavLink>
        </li>
      </ul>
      <FriendsContainer/>
    </nav>
  )
}

export default NavBar;
