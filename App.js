import React from 'react';
import AppContainer from './app/components/CustomNavigation/Navigation';
import store from './app/store/Index';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

