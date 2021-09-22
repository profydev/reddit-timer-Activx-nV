import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { urlActions } from '../store/index';
import classes from './Header.module.scss';
import logo from '../assets/logo.svg';

const Header = () => {
  const dispatch = useDispatch();
  const URLHandler = () => {
    dispatch(urlActions.setURL('/search/javascript'));
  };
  const homeURLHandler = () => {
    dispatch(urlActions.setURL('/'));
  };

  return (
    <header className={classes.header}>
      <Link onClick={homeURLHandler} to="/">
        <img src={logo} className={classes.logo} alt="reddit logo" />
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <NavLink onClick={URLHandler} to="/search/javascript" className={classes.item_link}>
              Search
            </NavLink>
          </li>
          <li className={classes.item}>
            <a href="/#how-it-works" className={classes.item_link}>
              How it works
            </a>
          </li>
          <li className={classes.item}>
            <a href="/#about" className={classes.item_link}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
