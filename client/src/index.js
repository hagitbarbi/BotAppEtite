import React from 'react';
import { createRoot } from 'react-dom/client'; // ייבוא createRoot
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import reducers from './reducers';
import App from './App';

// יצירת החנות (store)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// בחירת root DOM
const container = document.getElementById('root');
const root = createRoot(container);

// רינדור האפליקציה
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
