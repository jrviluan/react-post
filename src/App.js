import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import Routes from './app/routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
