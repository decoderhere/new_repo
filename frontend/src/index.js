import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware ,combineReducers } from "redux";
import { configureStore, Tuple } from "@reduxjs/toolkit";
import { loginReducer,getAllStudents } from "./Reducers/loginReducer";
import { thunk } from "redux-thunk";

const middlewares= [thunk]

const reducers= combineReducers({loginReducer,getAllStudents})
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),// if no middleware given
  //middleware : middlewares
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
