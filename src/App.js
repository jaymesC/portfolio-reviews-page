import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import "./index.css";
import { data } from "./data";

function App() {
  const [cards, setCards] = useState(0);


  return (
    <div className="header">
      <h1>Our Reviews</h1>
      <div className="container">
        <div className="card">
          <img src={data[cards].image} alt="" />
          <h3>{data[cards].name}</h3>
          <h5>{data[cards].position}</h5>
          <p>{data[cards].description}</p>
          <div className="navigation">
            <button onClick={() => cards >= data.length -1 ? setCards(cards - 3) : setCards(cards + 1)}><ChevronLeftIcon className="icon"/></button>
            <button onClick={() => {cards <= data.length-4 ? setCards(cards + 3) : setCards(cards - 1)}}><ChevronRightIcon className="icon"  /></button>
          </div>
          <button className="btn" onClick={() => {setCards(Math.trunc(Math.random() * 4))}}>
            Surprise me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
