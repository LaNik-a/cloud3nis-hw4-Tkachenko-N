import React, { Component } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { AppWithNavigationState } from "./route";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
export default App;
