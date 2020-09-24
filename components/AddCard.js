import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { StackActions, CommonActions } from "@react-navigation/native";
import { connect } from "react-redux";
import { addCard } from "../actions/index";
import { addCardToDeck } from "../utils/api";
import TouchButton from "./TouchButton";

export class AddCard extends Component {
  state = {
    question: "",
    answer: "",
  };
  onChangeQuestionText = (question) => {
    this.setState({ question });
  };
  onChangeAnswerText = (answer) => {
    this.setState({ answer });
  };
  handleSubmit = () => {
    const { addCard, route, navigation } = this.props;
    const { title } = route.params;
    const card = {
      question: this.state.question,
      answer: this.state.answer,
    };
    addCard(title, card);
    addCardToDeck(title, card);
    this.setState({ question: "", answer: "" });
    navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            value={this.state.question}
            onChangeText={this.onChangeQuestionText}
            placeholder="Question"
            autoFocus={true}
            returnKeyType="done"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={this.state.answer}
            onChangeText={this.onChangeAnswerText}
            placeholder="Answer"
            returnKeyType="done"
          />
        </View>
        <TouchButton
          onPress={this.handleSubmit}
          disabled={this.state.question === "" || this.state.answer === ""}
        >
          Submit
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

export default connect(null, { addCard })(AddCard);
