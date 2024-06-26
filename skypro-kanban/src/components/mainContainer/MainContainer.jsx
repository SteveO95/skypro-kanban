import { useEffect, useState } from "react";
import Column from "../column/Column";
import Header from "../header/Header";
import {
  Container,
  Loading,
  MainBlock,
  MainContent,
  MainPage,
  
} from "./MainContainer.styled";
import { Wrapper } from "../../styles/shared";
import { getToDos } from "../../api";
import { useUserContext } from "../../contexts/hooks/useUser";
import { useTaskContext } from "../../contexts/hooks/useTask";



const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainContainer() {
  const {user} = useUserContext();
   const {cards} = useTaskContext();
   const {setCards} = useTaskContext();
 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);  
  

  useEffect(() => {
    getToDos({token: user.token}).then((cards) => {
       setCards(cards.tasks)
      setIsLoading(false);
    }).catch((err)=>{setError(err.message)})
    .finally(()=> {
      setIsLoading(false);
    })

  }, [])

  
  return (
    <Wrapper>
    <MainPage>
      <Header />
      <Container>
        <MainBlock>
          <MainContent>
          {error ? (<p style={{color: "red"}}>Произошла ошибка, попробуйте позже!</p> ) :   
           (isLoading ? (<Loading> Загрузка...</Loading>) : (
              <>
                {statusList.map((status) => {
                  return (
                    <Column
                      key={status}
                      title={status}
                      allCards={cards.filter((card) => card.status === status)}
                    />
                  );
                })}
              </>)
            )
          }
          </MainContent>
        </MainBlock>
      </Container>
    </MainPage>
    </Wrapper>
  );
}

export default MainContainer;
