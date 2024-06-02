import Main from "../components/Main/Main";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import { StyledWrapper } from "../Global.styled";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getTodos } from "../api";
import { useUserContext } from "../context/user";
import { CardsContext } from "../context/cards";

const MainPage = () => {
  const [cards, setCards] = useState(null);
  const [loadingError, setLoadingError] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const { user } = useUserContext();

  const getCards = () => {
    getTodos(user.token)
      .then((data) => {
        setCards(data.tasks);
        setDataLoading(false);
        setLoadingError(false);
      })
      .catch(() => {
        setTimeout(getCards, 1000);
      });
  };

  const updateCards = (newCards) => {
    setCards(newCards);
  };

  useEffect(() => {
    getCards();
  }, []);

  let displayComponent;

  if (loadingError) {
    displayComponent = <Loader errorMessage={"Ошибка получения данных. Пробуем ещё разок..."} />;
  } else if (dataLoading) {
    displayComponent = <Loader />;
  } else {
    displayComponent = <Main />;
  }

  return (
    <CardsContext.Provider value={{ cards, updateCards }}>
      <StyledWrapper>
        <Header user={user} />
        {displayComponent}
        <Outlet />
      </StyledWrapper>
    </CardsContext.Provider>
  );
};

export default MainPage;
