import Main from "../components/Main/Main";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import { cardsList, topicList } from "../data";
import { StyledWrapper } from "../Global.styled";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getTodos } from "../api";

const MainPage = ({ user }) => {
  const [cards, setCards] = useState(null);
  const [loadingError, setLoadingError] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  const addCard = () => {
    let newId = cards.slice(-1)[0]._id + 1;
    setCards([
      ...cards,
      {
        _id: newId,
        topic: topicList[Math.floor(Math.random() * topicList.length)],
        title: `Test title ${newId}`,
        date: new Date().toLocaleDateString("es-CL").split("-").reverse().join("-"),
        status: "Без статуса",
      },
    ]);
  };
// изменение запросов
  const getCards = () => {
    getTodos(user.token)
      .then((data) => {
        setCards(data.tasks);
        setDataLoading(false);
        setLoadingError(false);
      })
      .catch((error) => {
        setLoadingError(true);
        console.error("Error fetching tasks:", error);
      });
};

useEffect(() => {
    let isMounted = true;

    if (isMounted) {
        getCards();
    }

    return () => {
        isMounted = false;
    };
}, []);

  let displayComponent;
  if (loadingError) {
    displayComponent = <Loader errorMessage={"Ошибка получения данных. Пробуем ещё раз..."} />;
  } else if (dataLoading) {
    displayComponent = <Loader />;
  } else {
    displayComponent = <Main cards={cards} />;
  }

  return (
    <StyledWrapper>
      <Header user={user} addCard={addCard} />
      {displayComponent}
      <Outlet />
    </StyledWrapper>
  );
};

export default MainPage;
