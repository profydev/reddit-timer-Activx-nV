import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { urlActions } from '../store/index';
import classes from './SearchForm.module.scss';

const SearchForm = () => {
  const dispatch = useDispatch();
  const subredditInputRef = useRef('');
  const history = useHistory();
  const historyPathName = history.location.pathname.split('/search/').join('').trim();
  useEffect(() => {
    dispatch(urlActions.setURL(`/search/${historyPathName}`));
  });

  const URL = useSelector((state) => state.URL.url);
  // const [subredditValue, setSubredditValue] = useState('javascript');

  const URLStateHandler = () => {
    dispatch(urlActions.setURL(`/search/${subredditInputRef.current.value.trim()}`));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const inputURL = subredditInputRef.current.value.trim();
    dispatch(urlActions.setURL(`/search/${inputURL}`));
    // setSubredditValue(subredditInputRef.current.value.trim());
    history.replace(`/search/${inputURL}`);
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
              ref={subredditInputRef}
              type="text"
              placeholder="javascript"
              value={URL.split('/search/').join('').trim()}
            />
            <button type="submit">SEARCH</button>
          </form>
        </section>
      </section>
    </>
  );
};

export default SearchForm;
