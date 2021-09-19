import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.scss';
import logo from '../assets/footer_logo.svg';

const Footer = () => (
  <footer className={classes.footer}>
    <a
      className={`${classes.link} ${classes.profyLink}`}
      href="https://ooloo.io/employers"
      target="_blank"
      rel="noreferrer"
    >
      profy.dev
    </a>
    <NavLink to="/">
      <img src={logo} className={classes.logo} alt="reddit logo" />
    </NavLink>
    <NavLink className={`${classes.link} ${classes.terms}`} to="/terms">Terms & Privacy</NavLink>
  </footer>
);

export default Footer;
