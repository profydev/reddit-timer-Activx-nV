import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { urlActions } from '../store/index';
import classes from './Footer.module.scss';
import { ReactComponent as Logo } from '../assets/footer_logo.svg';

const Footer = () => {
  const dispatch = useDispatch();
  const homeURLHandler = (url) => {
    dispatch(urlActions.setURL(url));
  };
  return (
    <footer className={classes.footer}>
      <a
        className={`${classes.link} ${classes.profyLink}`}
        href="https://profy.dev/employers"
        target="_blank"
        rel="noreferrer"
      >
        profy.dev
      </a>
      <NavLink
        onClick={() => {
          homeURLHandler('/');
        }}
        className={classes.logo}
        to="/"
      >
        <Logo />
      </NavLink>
      <NavLink
        onClick={() => {
          homeURLHandler('/terms');
        }}
        className={`${classes.link} ${classes.terms}`}
        to="/terms"
      >
        Terms & Privacy
      </NavLink>
    </footer>
  );
};

export default Footer;
