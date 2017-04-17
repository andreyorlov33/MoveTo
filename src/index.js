import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
// import the store config object
import configureStore from './store/store';  

// declare the store
const store = configureStore();


ReactDOM.render(
  // pass the store in through the REDUX Provider component to give all 
  //  component access to it
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
