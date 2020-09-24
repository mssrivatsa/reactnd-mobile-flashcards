import { getData } from '../utils/api';

export const GET_DECKS = "GET_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}

export function addCard(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return getData().then((decks) => {
      dispatch(getDecks(decks));
    });
  };
}
