import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import reducer from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { watchIncrementAction, watchDecrementAction, watchAddAction } from "./redux/saga/counter.action";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchIncrementAction)
sagaMiddleware.run(watchDecrementAction)
sagaMiddleware.run(watchAddAction)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
