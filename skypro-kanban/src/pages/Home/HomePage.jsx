import { useEffect, useState } from "react";
import { GlobalStyle } from "../../styled/global/Global.styled";
import { WrapperStyled } from "../../styled/common/Common.styled";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Column from "../../components/Column/Column";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api/api";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  const { cards, setCards } = useTasks();

  useEffect(() => {
    getTodos({ token: user.token })
      .then((todos) => {
        setCards(todos.tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, [user, setCards]);

  return (
    <>
      <GlobalStyle />
      <WrapperStyled>
        <Outlet />

        <Header />
        {isLoading ? (
          "Данные загружаются..."
        ) : (
          <MainContent>
            {statusList.map((status) => (
              <Column
                title={status}
                key={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        )}
      </WrapperStyled>
    </>
  );
}
