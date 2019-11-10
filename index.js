import React from "react";
import ReactDOM from "react-dom";
import HotelsList from "./HotelsList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <HotelsList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
