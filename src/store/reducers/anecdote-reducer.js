import { v4 as uuidv4 } from "uuid";
import { ADD_ANECDOTE, VOTE_ANECDOTE } from "../actions/anecdote-actions";

function anecdoteReducer(
  state = {
    value: [
      { id: uuidv4(), content: "If it hurts, do it more often.", votes: 0 },
      {
        id: uuidv4(),
        content: "Adding manpower to a late software project makes it later!",
        votes: 0,
      },
      {
        id: uuidv4(),
        content:
          "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        votes: 0,
      },
      {
        id: uuidv4(),
        content:
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        votes: 0,
      },
      {
        id: uuidv4(),
        content: "Premature optimization is the root of all evil.",
        votes: 0,
      },
      {
        id: uuidv4(),
        content:
          "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        votes: 0,
      },
      {
        id: uuidv4(),
        content:
          "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        votes: 0,
      },
      {
        id: uuidv4(),
        content: "The only way to go fast, is to go well.",
        votes: 0,
      },
    ],
  },
  action = {}
) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ANECDOTE:
      return {
        ...state,
        value: [
          { id: uuidv4(), votes: 0, content: payload.value },
          ...state.value,
        ],
      };
    case VOTE_ANECDOTE: {
      const clone = { ...state, value: [...state.value] };
      const newValue = clone.value.map((val) => {
        if (val.id === payload.id) {
          return { ...val, votes: (val.votes += 1) };
        }
        return val;
      });
      return { ...state, value: newValue };
    }

    default:
      return state;
  }
}
export default anecdoteReducer;
