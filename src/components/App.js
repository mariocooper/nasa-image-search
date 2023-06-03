import React from "react";
import "../styles/app.css";
import Search from "./Search";

function App() {
  return (
    <div className="app">
      <img className="nasa-logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="NASA Logo"></img>
      <Search />
    </div>
  );
}

export default App;
