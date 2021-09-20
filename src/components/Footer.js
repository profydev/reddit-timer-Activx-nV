import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.scss';
import { ReactComponent as Logo } from '../assets/footer_logo.svg';

const Footer = () => (
  <footer className={classes.footer}>
    <a
      className={`${classes.link} ${classes.profyLink}`}
      href="https://profy.dev/employers"
      target="_blank"
      rel="noreferrer"
    >
      profy.dev
    </a>
    <NavLink className={classes.logo} to="/">
      <Logo />
    </NavLink>
    <NavLink className={`${classes.link} ${classes.terms}`} to="/terms">
      Terms & Privacy
    </NavLink>
  </footer>
);

export default Footer;
