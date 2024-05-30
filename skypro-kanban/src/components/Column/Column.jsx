
import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";


export default function Column({ title, cardList }) {
  
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cardList.map((card) => (
          <Card
            theme={card.topic}
            title={card.title}
            date={card.date}
            key={card._id}
            status={card.status}
            id={card._id}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}
