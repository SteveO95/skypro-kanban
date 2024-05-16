import Main from "../components/Main/Main";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import { cardsList, topicList } from "../data";
import { StyledWrapper } from "../Global.styled";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
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
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledWrapper>
      <Header addCard={addCard} />
      {dataLoading ? <Loader /> : <Main cards={cards} />}

      <Outlet />
    </StyledWrapper>
  );
};

export default MainPage;
