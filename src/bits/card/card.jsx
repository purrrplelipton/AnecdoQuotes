import { IconStarFilled } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { LikeBtn, PrvNxtBtn } from './assets/components';
import styles from './card.module.css';

function Card({ anecdote, previous, next, vote }) {
  const anecdotes = useSelector((state) => state.anecdotes);
  const highestVote = Math.max(...anecdotes.map((dote) => dote.votes));
  const mostVoted = highestVote > 0 && highestVote === anecdote.votes;

  return (
    <article className={styles.card}>
      {mostVoted && <IconStarFilled className={styles.starWrapper} />}
      <section>
        <p>{anecdote.content}</p>
      </section>
      <section>
        <PrvNxtBtn previous={previous} next={next} />
        <LikeBtn onClick={vote} votes={anecdote.votes} />
      </section>
    </article>
  );
}

Card.propTypes = {
  anecdote: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  vote: PropTypes.func.isRequired,
};

export default Card;
