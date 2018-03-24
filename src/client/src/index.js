import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { displayFlash } from "./actions/flash.actions";

import reducers from "./reducers";

const flasher = store => next => action => {
  if (!action.flash) return next(action);
  // if(action.type.incldues("REQUEST")) {

  // }
  const { flash: { message, status } } = action;
  displayFlash(store.dispatch, {
    status,
    message,
  });
  return next(action);
};

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk, logger, flasher)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
