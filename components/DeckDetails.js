import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import DeckCard from "./DeckCard";
import TouchButton from "./TouchButton";

export class DeckDetails extends Component {
  render() {
    const { route, navigation, decks } = this.props;
    const { title } = route.params;
    const deck = decks[title];

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, paddingBottom: 40 }}>
          <DeckCard deck={deck} />
        </View>
        <View style={{ flex: 1 }}>
          <TouchButton
            onPress={() =>
              navigation.navigate("Add Card", { title: deck.title })
            }
          >
            Add Card
          </TouchButton>
          <TouchButton
            onPress={() => navigation.navigate("Quiz", { title: deck.title })}
          >
            Start Quiz
          </TouchButton>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 48,
    justifyContent: "space-between",
  },
};

const mapStateToProps = (state) => ({ decks: state });

export default connect(mapStateToProps)(DeckDetails);
