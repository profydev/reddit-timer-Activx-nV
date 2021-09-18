import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Header.module.scss';
import logo from '../assets/logo.svg';

const Header = () => (
  <header className={classes.header}>
    <Link to="/">
      <img src={logo} className={classes.logo} alt="reddit logo" />
    </Link>
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink className={classes.item_link} to="/search/javascript">
            Search
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/#how-it-works" className={classes.item_link}>
            How it works
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/#about" className={classes.item_link}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
