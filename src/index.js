import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './utils/configureStore';
import 'bootstrap/dist/css/bootstrap.css';

const getLines = async () => {
  const response = await fetch('https://qvqnyun7pl.execute-api.us-east-1.amazonaws.com/prod/lines', {
    headers: {
      categories: ['cheesy', 'funny', 'risky', 'stupid', 'pickup', 'question']
    }
  });
  return response.json();
}
getLines()
  .then(lines => {
    const store = configureStore(lines);
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
  })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
