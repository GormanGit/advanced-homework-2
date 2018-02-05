import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

var currentCategory = "";

function changeCategory(category){
  currentCategory = category;
render();
}

function render() {
  ReactDOM.render(<App
      products={state.products}
      currentCategory={currentCategory}
      changeCategory={changeCategory}

    />,
  document.getElementById("root"));
}
render();

