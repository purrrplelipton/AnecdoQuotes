import { IconThumbUp, IconThumbUpFilled } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './components.module.css';

function LikeBtn({ onClick, votes }) {
  return (
    <div>
      <button
        className={`${styles.btnBase} ${styles.anecdoteVoteBtn}`}
        type="button"
        onClick={onClick}
        aria-label="like current anecdote"
      >
        {votes ? <IconThumbUpFilled /> : <IconThumbUp />}
      </button>
      <span className={styles.anecdoteVoteCount}>{votes}</span>
    </div>
  );
}

LikeBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  votes: PropTypes.number.isRequired,
};

export default LikeBtn;
