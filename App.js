import * as React from "react";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import middleware from "./middleware";
import { Provider } from "react-redux";
import AppNavigation from './components/AppNavigation'
import { AppRegistry } from 'react-native';

const store = createStore(rootReducer, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
    </Provider>
    );
  }
}

