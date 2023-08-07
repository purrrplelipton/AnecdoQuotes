import { v4 as uuidv4 } from 'uuid';

export const VOTE_ANECDOTE = 'VOTE_ANECDOTE';
export const ADD_ANECDOTE = 'ADD_ANECDOTE';
export const REMOVE_ANECDOTE = 'REMOVE_ANECDOTE';

export function addAnecdote(anecdote) {
  return { type: ADD_ANECDOTE, payload: { id: uuidv4(), anecdote, votes: 0 } };
}

export function voteAnecdote(id) {
  return { type: VOTE_ANECDOTE, payload: { id } };
}
