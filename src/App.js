import React, { Component } from 'react';
import Layout from './app/components/Layout';
import { Provider } from 'react-redux';
import store from './app/store';

class App extends Component {
  render() {
    return (
      <div>
          <Provider store={store}>
            <Layout />
          </Provider>
      </div>
    );
  }
}

export default App;
