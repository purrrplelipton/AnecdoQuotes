import React from 'react';
import styles from './wandering-cubes.module.css';

function WanderingCubes() {
  return (
    <span className={`${styles.inner} ${styles.wanderingCubes}`}>
      <span className={styles.cube} />
      <span className={styles.cube} />
    </span>
  );
}

export default WanderingCubes;
