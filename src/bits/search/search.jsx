import WanderingCubes from "@bits/wandering-cubes";
import { changeFilter } from "@store/actions";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./search.module.css";

function Search() {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.anecdoteReducer.value);
  // const filter = useSelector((state) => state.filterReducer.value);
  const [searching, setSearching] = React.useState(false);
  const [queryResults, setQueryResults] = React.useState([]);

  const search = (e) => {
    e.preventDefault();
    setSearching(true);
    let value = null;
    switch (e.target.tagName) {
      case "INPUT":
        value = e.target.value;
        break;
      case "FORM":
        value = e.target.field.value;
        break;

      default:
        break;
    }
    dispatch(changeFilter(value));
    const rexp = new RegExp(value, "gui");
    if (value) {
      setQueryResults(anecdotes.filter(({ content }) => rexp.test(content)));
    } else setQueryResults([]);
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
      {queryResults.length > 0 && (
        <ul className={styles.resultsList}>
          {queryResults.map((anecdote) => (
            <li key={anecdote.id}>
              <p>{anecdote.content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Search;
