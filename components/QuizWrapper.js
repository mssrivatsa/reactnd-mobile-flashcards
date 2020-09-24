import React, { Component } from "react";
import Quiz from './Quiz';
import { setNotification, clearNotification } from '../utils/helpers';

export class QuizWrapper extends Component {
  
  componentDidMount() {
    clearNotification().then(setNotification);
  }

  render() {
    const { route, navigation } = this.props;
    const { title } = route.params;
    return (
      <Quiz title={title} navigation={navigation} />
    );
  }
}

export default QuizWrapper