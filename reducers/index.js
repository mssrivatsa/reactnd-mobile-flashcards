import { GET_DECKS, ADD_DECK, ADD_CARD } from "../actions/index";

export default function decks(state = {}, action) {
  switch (action.type) {
    
    case GET_DECKS: {
      const { decks } = action;
      return {
        ...state,
        ...decks,
      }
    }

    case ADD_DECK: {
      const { title } = action;
      return {
        ...state,
        [title]: {
          title,
          questions: [],
        },
      };
    }

    case ADD_CARD: {
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: [...state[deckId].questions, card],
        },
      };
    }

    default:
      return state;
  }
}
