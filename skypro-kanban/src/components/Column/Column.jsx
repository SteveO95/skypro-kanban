import Card from "../Card/Card";
import { StyledColumn, StyledColumnTitle, StyledCards } from "./Column.styled";

const Column = ({ title, cards }) => {
  return (
    <StyledColumn>
      <StyledColumnTitle>
        <p>{title}</p>
      </StyledColumnTitle>
      <StyledCards>
        {cards.map((card) => (
          <Card key={card.id} id={card.id} topic={card.topic} title={card.title} date={card.date} />
        ))}
      </StyledCards>
    </StyledColumn>
  );
};

export default Column;
