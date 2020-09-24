import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { StackActions, CommonActions } from "@react-navigation/native";
import { connect } from "react-redux";
import { addDeck } from "../actions/index";
import { saveDeckTitle } from '../utils/api';
import TouchButton from "./TouchButton";

export class AddDeck extends Component {
  state = {
    text: "",
  };

  onChangeText = (text) => {
    this.setState({ text });
  };

  handleSubmit = () => {
    const { addDeck, navigation } = this.props;
    const { text } = this.state;
    addDeck(text);
    saveDeckTitle(text);
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: "Home" },
          {
            name: "Deck Details",
            params: { title: text },
          },
        ],
      })
    );
    this.setState(() => ({ text: "" }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>What is the title of your new deck?</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={this.state.text}
            onChangeText={this.onChangeText}
            placeholder="Deck Title"
            autoFocus={true}
            returnKeyType="done"
          />
        </View>
        <TouchButton
          onPress={this.handleSubmit}
          disabled={this.state.text === ""}
        >
          Create Deck
        </TouchButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 5,
    fontSize: 16,
    height: 50,
    marginBottom: 20,
  },
});

export default connect(null, { addDeck })(AddDeck);
