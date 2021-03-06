import React, {
  useRef, useEffect, useState, useCallback,
} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { urlActions } from '../store/index';
import classes from './SearchForm.module.scss';
import loadingSpinner from '../assets/loading_spinner.svg';

const SearchForm = () => {
  const dispatch = useDispatch();
  const subredditInputRef = useRef('');
  const history = useHistory();
  const URL = useSelector((state) => state.URL.url);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const historyPathName = history.location.pathname.split('/search/').join('').trim();
  const fetchTopPosts = useCallback(async (subreddit, previousPosts = [], after = null) => {
    try {
      let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;
      if (after) {
        url += `&after=${after}`;
      }
      // console.log(url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request failed. Subreddit doesn't exist or something else.");
      }
      const { data } = await response.json();
      const allPosts = [...previousPosts, ...data.children];
      if (allPosts.length >= 500) {
        // console.log(allPosts);
        return allPosts;
      }
      fetchTopPosts(URL.split('/search/').join('').trim(), allPosts, data.after);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
    return null;
  }, [URL]);

  useEffect(() => {
    dispatch(urlActions.setURL(`/search/${historyPathName}`));
    setIsLoading(true);
    fetchTopPosts(historyPathName);
    // eslint-disable-next-line
  }, [dispatch, historyPathName]);

  // const [subredditValue, setSubredditValue] = useState('javascript');

  const URLStateHandler = () => {
    dispatch(urlActions.setURL(`/search/${subredditInputRef.current.value.trim()}`));
  };

  const submitHandler = (event) => {
    setIsLoading(true);
    setError(null);
    event.preventDefault();
    const inputURL = subredditInputRef.current.value.trim();
    dispatch(urlActions.setURL(`/search/${inputURL}`));
    // setSubredditValue(subredditInputRef.current.value.trim());
    history.push(`/search/${inputURL}`);

    // fetchTopPosts(inputURL);
  };

  return (
    <>
      <section className={classes.searchForm_section}>
        <h2 className={classes.subredditForm_title}>Find the best time for a subreddit</h2>
        <section className={classes.searchForm}>
          <p className={classes.subreddit_symbol}>r /</p>

          <form onSubmit={submitHandler}>
            <input
              onChange={URLStateHandler}
              className={classes.subredditForm_input}
              id="new-subreddit"
              name="subreddit"
              ref={subredditInputRef}
              type="text"
              placeholder="javascript"
              value={URL.split('/search/').join('').trim()}
            />

            <button type="submit">SEARCH</button>
          </form>
        </section>
        {isLoading && (
          <img src={loadingSpinner} className={classes.loadingSpinner} alt="loading spinner" />
        )}
        {error && <p className={classes.error}>{`${error}`}</p>}
      </section>
    </>
  );
};

export default SearchForm;
