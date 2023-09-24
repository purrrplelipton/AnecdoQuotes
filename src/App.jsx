import Card from "@bits/card";
import Search from "@bits/search";
import { changeSelection, voteAnecdote } from "@store/actions";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.anecdoteReducer.value);
  const index = useSelector((state) => state.selectReducer.value);

  const anecdote = anecdotes[index];

  const onClickPrevious = useCallback(() => {
    const newIndex = index === 0 ? anecdotes.length - 1 : index - 1;
    dispatch(changeSelection(newIndex));
  }, [dispatch, anecdote, index]);

  const onClickNext = useCallback(() => {
    const newIndex = index === anecdotes.length - 1 ? 0 : index + 1;
    dispatch(changeSelection(newIndex));
  }, [dispatch, anecdote, index]);

  const onClickVote = useCallback(
    () => dispatch(voteAnecdote(anecdote.id)),
    [dispatch, anecdote]
  );

  return (
    <>
      <Card
        anecdote={anecdote}
        previous={onClickPrevious}
        next={onClickNext}
        vote={onClickVote}
      />
      <Search anecdotes={anecdotes} />
    </>
  );
}

export default App;
