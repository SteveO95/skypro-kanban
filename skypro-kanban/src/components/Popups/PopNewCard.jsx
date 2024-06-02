import { Link, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import Calendar from "../Calendar/Calendar";
import * as Styled from "./PopUp.styled";
import { AppRoutesList } from "../../AppRoutesList";
import { useCardsContext } from "../../context/cards";
import { useState } from "react";
import { addNewTodos } from "../../api";
import { useUserContext } from "../../context/user";
import { topicCompare, topicList } from "../../data";

const PopNewCard = () => {
  const navigate = useNavigate();

  const { user } = useUserContext();

  const { updateCards } = useCardsContext();

  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString());

  const addCard = () => {
    const token = user.token;
    addNewTodos({ token, title, topic, description, date }).then((data) => {
      updateCards(data.tasks);
      navigate(AppRoutesList.Main);
    });
  };

  return (
    <Styled.StyledPopUp>
      <Styled.StyledPopUpContainer>
        <Styled.StyledPopUpBlock>
          <Styled.StyledPopUpContent>
            <Styled.StyledPopUpTitle>Создание задачи</Styled.StyledPopUpTitle>
            <Link to={AppRoutesList.Main}>
              <Styled.StyledPopUpClose>&#10006;</Styled.StyledPopUpClose>
            </Link>
            <Styled.StyledPopUpWrap>
              <Styled.StyledPopUpForm>
                <Styled.StyledPopUpFormBlock>
                  <Styled.StyledPopUpSubtitle>Название задачи</Styled.StyledPopUpSubtitle>
                  <Styled.StyledPopUpFormInput
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Styled.StyledPopUpFormBlock>
                <Styled.StyledPopUpFormBlock>
                  <Styled.StyledPopUpSubtitle>Описание задачи</Styled.StyledPopUpSubtitle>
                  <Styled.StyledPopUpFormTextarea
                    placeholder="Введите описание задачи..."
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  ></Styled.StyledPopUpFormTextarea>
                </Styled.StyledPopUpFormBlock>
              </Styled.StyledPopUpForm>
              <Calendar date={date} setDate={setDate} />
            </Styled.StyledPopUpWrap>
            <Styled.StyledPopUpCategories>
              <Styled.StyledPopUpCategoriesSubtitle>Категория</Styled.StyledPopUpCategoriesSubtitle>
              <Styled.StyledPopUpCategoriesThemes>
                {topicList.map((topicItem, index) => (
                  <div key={index}>
                    <Styled.StyledCategoriesThemeInput
                      id={topicItem}
                      value={topicItem}
                      type="radio"
                      checked={topic == topicItem}
                      onChange={(event) => setTopic(event.target.value)}
                    />
                    <Styled.StyledCategoriesTheme htmlFor={topicItem} $colorName={`${topicCompare[topicItem]}`}>
                      {topicItem}
                    </Styled.StyledCategoriesTheme>
                  </div>
                ))}
              </Styled.StyledPopUpCategoriesThemes>
            </Styled.StyledPopUpCategories>
            <Button
              onClick={addCard}
              text="Создать задачу"
              id="btnCreate"
              $width={"132px"}
              className="form-new__create _hover01"
            />
          </Styled.StyledPopUpContent>
        </Styled.StyledPopUpBlock>
      </Styled.StyledPopUpContainer>
    </Styled.StyledPopUp>
  );
};

export default PopNewCard;
