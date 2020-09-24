import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export class DeckCard extends Component {
  render() {
    const { deck } = this.props;
    const title = deck.title;
    const count = deck.questions.length;
    const suffixText = count === 1 ? " card" : " cards";
    const countText = count + suffixText;
    return (
      <View key={title} style={styles.container}>
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>{title}</Text>
        <Text style={{ fontSize: 12 }}>{countText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DeckCard;
