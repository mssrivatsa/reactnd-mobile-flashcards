import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";
import { withNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import QuizEmpty from "./QuizEmpty";
import TouchButton from "./TouchButton";
import TextButton from "./TextButton";

export class Quiz extends Component {
  state = {
    isQuestion: true,
    success: false,
    correct: 0,
    incorrect: 0,
    currentIdx: 0,
    questionCount: this.props.deck.questions.length,
  };

  handleRestart = () => {
    this.setState((prevState) => ({
      isQuestion: true,
      success: false,
      correct: 0,
      incorrect: 0,
      currentIdx: 0,
    }));
  };

  handleResponse = (isCorrect) => {
    if (isCorrect) {
      this.setState((prevState) => ({ correct: prevState.correct + 1 }));
    } else {
      this.setState((prevState) => ({ incorrect: prevState.incorrect + 1 }));
    }

    const { currentIdx, questionCount } = this.state;
    if (currentIdx + 1 === questionCount) {
      this.setState({ success: true });
    } else {
      this.setState((prevState) => ({
        isQuestion: true,
        currentIdx: prevState.currentIdx + 1,
      }));
    }
  };

  render() {
    const { navigation } = this.props;
    const { questions } = this.props.deck;
    const { view, success, questionCount } = this.state;
    if (questionCount === 0) {
      return <QuizEmpty />;
    }

    if (success) {
      const { correct, questionCount } = this.state;
      const percent = ((correct / questionCount) * 100).toFixed(0);
      return (
        <ScrollView>
          <Text style={[styles.text, { fontSize: 32 }]}>Quiz success!</Text>
          <Text style={styles.text}>Score</Text>
          <Text style={[styles.text, { fontSize: 24 }]}>
            {correct} / {questionCount}
          </Text>
          <Text style={styles.text}>Percentage</Text>
          <Text style={[styles.text, { fontSize: 24 }]}>{percent} %</Text>
          <TouchButton onPress={this.handleRestart}>Restart Quiz</TouchButton>
          <TouchButton
            onPress={() => {
              this.handleRestart();
              navigation.goBack();
            }}
          >
            Back To Deck
          </TouchButton>
        </ScrollView>
      );
    }

    const { currentIdx, isQuestion } = this.state;
    const question = questions[currentIdx];
    return (
      <ScrollView key={currentIdx}>
        <View>
          <Text style={styles.text}>
            {currentIdx + 1} / {questions.length}
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            {isQuestion ? question.question : question.answer}
          </Text>
        </View>

        {isQuestion ? (
          <TextButton

            onPress={() => this.setState({ isQuestion: false })}
          >
            Show Answer
          </TextButton>
        ) : (
          <TextButton
            
            onPress={() => this.setState({ isQuestion: true })}
          >
            Show Question
          </TextButton>
        )}

        <View style={{ minHeight: 20 }} />

        <View>
          <TouchButton onPress={() => this.handleResponse(true)}>
            Correct
          </TouchButton>
          <TouchButton onPress={() => this.handleResponse(false)}>
            Incorrect
          </TouchButton>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    padding: 16,
    marginBottom: 5,
  },
});

const mapStateToProps = (state, { title }) => {
  const deck = state[title];
  return {
    deck,
  };
};

export default connect(mapStateToProps)(Quiz);
