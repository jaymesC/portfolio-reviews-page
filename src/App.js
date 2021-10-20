import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import "./index.css";
import { data } from "./data";

function App() {
  const [cards, setCards] = useState(0);
  // // const [show, setShow] = useState('show');
  // const [text, setText] = useState("show");
  // const [isLoading, setIsLoading] = useState(true);

  // const removeItem = (id) => {
  //   let newCards = cards.filter((card) => card.id !== id);
  //   setCards(newCards);
  // };

  const surpriseFunc = () => {
    setCards(Math.trunc(Math.random() * 4));
  };

  // let min = 0,
  //   max = 10,
  //   step = +1,
  //   now = 0;

  const counterFunc = () => {
    if (cards >= data.length - 1) {
      setCards(cards - 3);
      console.log(cards);
    } else {
      setCards(cards + 1);
      console.log(cards);
    }
  };

  const counterFun = function () {
    if (cards <= data.length - 4) {
      setCards(cards + 3);
      console.log(cards);
    } else {
      setCards(cards - 1)
    }
  };

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
            <ChevronLeftIcon className="icon" onClick={counterFunc} />
            <ChevronRightIcon className="icon" onClick={counterFun} />
          </div>
          <button className="btn" onClick={surpriseFunc}>
            Surprise me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
