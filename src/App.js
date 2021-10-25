import React from 'react';
import './App.css';
import { Reset } from 'styled-reset';
import Routes from './routes';

import { Provider } from 'react-redux';
import store from './redux/store';
import Updates from './services/updates'

function App() {
  return (
    <>
      <Provider store={store}>
        <Reset/>
        <Updates/>            
        <Routes/>
      </Provider>
    </>
  );
}

export default App;
