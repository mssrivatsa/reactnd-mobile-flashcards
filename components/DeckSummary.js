import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DeckCard from "./DeckCard";
import DeckDetails from "./DeckDetails";

export class DeckSummary extends Component {
  render() {
    const { deck, navigation } = this.props;

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Deck Details", { title: deck.title })
        }
      >
        <DeckCard deck={deck} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    color: "black",
    marginBottom: 10,
  },
});

export default DeckSummary;
