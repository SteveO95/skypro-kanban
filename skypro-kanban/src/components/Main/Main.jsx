import { statusList } from "../../data";
import Column from "../Column/Column";
import { StyledMain, StyledMainBlock, StyledMainContent } from "./Main.styled";
import { StyledContainer } from "../Container/Container.styled";
import { useCardsContext } from "../../context/cards";

const Main = () => {
  const { cards } = useCardsContext();

  return (
    <StyledMain>
      <StyledContainer>
        <StyledMainBlock>
          <StyledMainContent>
            {statusList.map((status, index) => (
              <Column key={index} title={status} cards={cards.filter((card) => card.status == status)} />
            ))}
          </StyledMainContent>
        </StyledMainBlock>
      </StyledContainer>
    </StyledMain>
  );
};

export default Main;
