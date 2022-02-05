import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const dialogsData = [
  { id: 1, name: "Lisa" },
  { id: 2, name: "Vika" },
  { id: 3, name: "Lilia" },
  { id: 4, name: "Vlad" },
  { id: 5, name: "Dima" },
];
const messagesData = [
  { id: 1, message: "hi" },
  { id: 2, message: "What da fuck!" },
  { id: 3, message: "Esketit" },
];

const postsData = [
  { id: 1, message: "Bye World", likeCount: "12" },
  { id: 2, name: "Abrakadabra", likeCount: "11" },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      dialogsData={dialogsData}
      messagesData={messagesData}
      postsData={postsData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
