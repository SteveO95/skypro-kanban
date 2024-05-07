// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopNewCard from "./components/Popups/PopNewCard";
import PopUser from "./components/Popups/PopUser";
import PopBrowse from "./components/Popups/PopBrowse";
import Loader from "./components/Loader/Loader";
import { cardsList, topicList } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState(cardsList);
  const [dataLoading, setDataLoading] = useState(true);

  const addCard = () => {
    let newId = cards.slice(-1)[0].id + 1;
    setCards([
      ...cards,
      {
        id: newId,
        topic: topicList[Math.floor(Math.random() * topicList.length)],
        title: `Test title ${newId}`,
        date: new Date().toLocaleDateString("es-CL").split("-").reverse().join("-"),
        status: "Без статуса",
      },
    ]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="wrapper">
        <PopUser />
        <PopNewCard />
        <PopBrowse />

        <Header addCard={addCard} />
        {dataLoading ? <Loader /> : <Main cards={cards} />}
        {/* <Main cards={cards} /> */}
      </div>
    </>
  );
}

export default App;
