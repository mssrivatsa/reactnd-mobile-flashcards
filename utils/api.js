import { AsyncStorage } from "react-native";
import { decks } from "./_DATA";

const DECKS_STORAGE_KEY = "reactnd-mobile-flashcards:decks";

export async function getData() {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    if (storeResults === null) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }
    return storeResults === null ? decks : JSON.parse(storeResults);
  } catch (err) {
    console.log(err);
  }
}

export async function getDeck(id) {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    return JSON.parse(storeResults)[id];
  } catch (err) {
    console.log(err);
  }
}

export async function saveDeckTitle(title) {
  try {
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export async function addCardToDeck(title, card) {
  try {
    const deck = await getDeck(title);
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card),
        },
      })
    );
  } catch (err) {
    console.log(err);
  }
}
