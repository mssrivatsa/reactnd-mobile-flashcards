import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import DeckSummary from "./DeckSummary";
import DeckDetails from "./DeckDetails";
import { handleInitialData } from "../actions/index";

export class DeckList extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { decks } = this.props;

    if (decks === undefined) {
      return <View />;
    }

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Mobile Flashcards</Text>
        {Object.values(decks).map((deck) => {
          return <DeckSummary deck={deck} navigation={this.props.navigation} />;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
});

const mapStateToProps = (state) => ({ decks: state });

export default connect(mapStateToProps, { handleInitialData })(DeckList);
