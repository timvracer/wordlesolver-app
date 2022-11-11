import { useSelector, useDispatch } from 'react-redux';
import { getToggle, toggle } from "../../app/data/uiSlice.js"

import './Links.css';
import styles from '../counter/Counter.module.css';

export function Links() {
  const showLinks = useSelector(getToggle);
  const dispatch = useDispatch();
  return (
    <span>
      <button
          className={styles.button}
          style={ {marginRight: 8, minWidth: 45 } }
          aria-label="Toggle links section"
          onClick={() => dispatch(toggle())}
      >
        { showLinks ? '-' : '+' }
      </button>
      <span className = "Links" style = {{ marginLeft: showLinks ? 0 : 10, opacity: showLinks ? 1 : 0 }}>
        <span>Learn </span>
        <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </span>
  );
}
