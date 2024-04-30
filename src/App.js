import imageRickMorty from "./img/rick-morty.png";
import './App.css';
import React from "react";

function App() {
  const reqApi = () =>
    console.log("clicking");
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
        <button onClick={reqApi} className="btn-search">Buscar Personajes
        </button>
      </header>
    </div>
  );
}

export default App;

