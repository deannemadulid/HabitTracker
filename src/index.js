import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import habitsReducer from './components/Dashboard/habitsReducer'

const reducer = combineReducers({
  habits: habitsReducer
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);