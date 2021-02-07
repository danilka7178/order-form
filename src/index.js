import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from "./App";

import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);