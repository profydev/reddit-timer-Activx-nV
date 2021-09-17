import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../assets/logo.svg';

const Header = () => (
  <header className={classes.header}>
    <Link to="/">
      <img src={logo} alt="reddit logo" />
    </Link>
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.li}>
          <NavLink className={classes.li_link} to="/search">Search</NavLink>
        </li>
        <li className={classes.li}>How it works</li>
        <li className={classes.li}>About</li>
      </ul>
    </nav>
  </header>
);

export default Header;
