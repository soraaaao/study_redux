import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createStore } from 'redux';

const container = document.getElementById('root')!;
const root = createRoot(container);

type ActionType = {
  type: "INCREMENT" | "DECREMENT";
}

// actions -> increment, decrement
const increment = (): ActionType => {
  return {
    type: "INCREMENT",
  };
};

const decrement = ():ActionType => {
  return {
    type: "DECREMENT",
  };
};

// reducer
const counterReducer = (state: number = 0, action: ActionType) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};


// Store
let store = createStore(counterReducer)

// コンソールログに新しい状態を出力
store.subscribe(() => console.log(store.getState()))

// dispatch
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
