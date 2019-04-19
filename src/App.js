import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import Table from './components/Table';
import Details from './components/Details';

class App extends Component {
  render() {
    const { store } = this.props;
    const state = store.getState();
    const lines = state.lines;

    return (
      <Provider store={this.props.store}>
        <div className='App'>
          <div className='tableWrap'>
            <Table />
          </div>
          <Details />
        </div>
      </Provider>
    );
  }
}

export default App;
