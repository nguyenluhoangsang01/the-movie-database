import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "the-new-css-reset/css/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"), {
  identifierPrefix: "the-movie-database-",
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
