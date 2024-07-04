import React from "react";
import "./App.css"
import NavBar from "./components/Navbar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { originals, actions } from "./constants/urls"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={actions} title="Action" isSmall />
    </div>
  );
}

export default App;
