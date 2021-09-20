import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';
import heatmap from '../assets/heatmap.png';

const Home = () => (
  <>
    <section className={classes.homePage}>
      <section className={classes.homePage__searchSection}>
        <h1 className={classes.homePage__heading}>No reactions to your reddit posts?</h1>
        <p className={classes.homePage__subtitle}>
          Great timing, great results! Find the best time to post on your subreddit.
        </p>

        <button type="button" className={classes.homePage__searchBtn}>
          <Link className={classes.btnLink} to="/search/javascript">
            SHOW ME THE BEST TIME
          </Link>
        </button>

        <p className={classes.subredditName}>r/javascript</p>
        <Link className={classes.heatmapLink} to="/search/javascript">
          <img src={heatmap} alt="heatmap table" className={classes.heatmap} />
        </Link>
      </section>

      <section id="how-it-works" className={classes.homePage__howitworks}>
        <h2 className={classes.homePage__howitworks_heading}>How it works</h2>
        <div className={classes.homePage__howitworks_descr}>
          • We find the 500 top posts from the past year for a subreddit.
          <br />
          • The data is visualized in a heatmap grouped by weekday and hour of the day.
          <br />
          • See immediately when to submit your reddit post.
        </div>
      </section>

      <section id="about" className={classes.homePage__about}>
        <h2 className={classes.homePage__about_heading}>About</h2>
        <div className={classes.homePage__about_descr}>
          This app was created during a course on
          <a
            className={classes.link}
            href="https://profy.dev/employers"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;profy.dev&nbsp;
          </a>
          with the goal to implement a
          <br />
          pixel-perfect real-world application with professional workflows and tools like Kanban,
          <br />
          ClickUp, Figma, GitHub, pull requests and code reviews.
          <a
            className={classes.link}
            href="https://profy.dev/employers"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;Click here for more information.
          </a>
        </div>
      </section>
    </section>
  </>
);

export default Home;
