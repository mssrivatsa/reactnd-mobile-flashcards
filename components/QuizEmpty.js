import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

export function QuizEmpty() {
  return (
    <View style={styles.emptyContainer}>
      <View>
        <Text style={{ textAlign: "center" }}>
          You cannot take a quiz because there are no cards in the deck.
        </Text>
        <View style={{ minHeight: 20 }} />
        <Text style={{ textAlign: "center" }}>
          Please add some cards and try again.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "space-around",
  },
});

export default QuizEmpty;
