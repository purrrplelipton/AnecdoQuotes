import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './components.module.css';

function PrvNxtBtn({ previous, next }) {
  return (
    <div>
      <button
        className={`${styles.btnBase}`}
        type="button"
        onClick={previous}
        aria-label="show previous anecdote"
      >
        <IconChevronLeft />
      </button>
      <button
        className={`${styles.btnBase}`}
        type="button"
        onClick={next}
        aria-label="show next anecdote"
      >
        <IconChevronRight />
      </button>
    </div>
  );
}

PrvNxtBtn.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default PrvNxtBtn;
