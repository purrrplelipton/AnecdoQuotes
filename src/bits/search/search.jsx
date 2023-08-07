import WanderingCubes from '@bits/wandering-cubes';
import { IconSearch } from '@tabler/icons-react';
// import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './search.module.css';

function Search() {
  const [searching, setSearching] = React.useState(false);

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const search = (e) => {
    setSearching(true);
    e.preventDefault();
    setSearching(false);
  };

  return (
    <form onSubmit={search} className={styles.searchForm}>
      <input type="text" />
      <button type="submit" aria-label="Search">
        {searching ? <WanderingCubes /> : <IconSearch />}
      </button>
    </form>
  );
}

// Search.propTypes = {};

export default Search;
