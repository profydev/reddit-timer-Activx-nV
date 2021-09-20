import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './SearchForm.module.scss';

const SearchForm = () => {
  const subredditInputRef = useRef('');
  const [subredditValue, setSubredditValue] = useState('javascript');
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    setSubredditValue(subredditInputRef.current.value.trim());
    history.replace(`/search/${subredditValue}`);
  };
  const inputValueHandler = (event) => {
    setSubredditValue(event.target.value.trim());
  };

  return (
    <>
      <section className={classes.searchForm_section}>
        <h2 className={classes.subredditForm_title}>Find the best time for a subreddit</h2>
        <section className={classes.searchForm}>
          <p className={classes.subreddit_symbol}>r /</p>

          <form onSubmit={submitHandler}>
            <input
              onChange={inputValueHandler}
              className={classes.subredditForm_input}
              id="new-subreddit"
              ref={subredditInputRef}
              type="text"
              placeholder="javascript"
              value={subredditValue}
            />
            <button type="submit">SEARCH</button>
          </form>
        </section>
      </section>
    </>
  );
};

export default SearchForm;
