import WanderingCubes from "@bits/wandering-cubes";
import { changeFilter } from "@store/actions";
import { IconSearch } from "@tabler/icons-react";
import pt from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./search.module.css";

function Search({ anecdotes }) {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.filter);
  const [searching, setSearching] = React.useState(false);
  const [clonedAnecdotes, setClonedAnecdotes] = React.useState(anecdotes);

  React.useEffect(() => {
    setClonedAnecdotes((prv) => {
      prv.filter((ncdt) => ncdt.content.includes(query));
    });
  }, [query]);

  const search = (e) => {
    setSearching(true);
    e.preventDefault();
    const { target } = e;
    let query$ = "";
    switch (target.tagName) {
      case "INPUT":
        query$ = target.value;
        break;
      case "FORM":
        query$ = target.field.value;
        break;

      default:
        break;
    }

    dispatch(changeFilter(query$));
    setSearching(false);
  };

  return (
    <section>
      <form onSubmit={search} className={styles.searchForm}>
        <input type="text" name="field" onChange={search} />
        <button type="submit" aria-label="Search">
          {searching ? <WanderingCubes /> : <IconSearch />}
        </button>
      </form>
      {query && (
        <ul>
          {clonedAnecdotes.map(({ content, id }) => (
            <li key={id}>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

Search.propTypes = {
  anecdotes: pt.arrayOf(pt.shape({})).isRequired,
};

export default Search;
