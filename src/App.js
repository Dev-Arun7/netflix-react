import React from "react";
import "./App.css"
import NavBar from "./components/Navbar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { originals, actions, comedy, romance, documentaries } from "./constants/urls"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={actions} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentaries} title="Documentaries" />
    </div>
  );
}

export default App;
