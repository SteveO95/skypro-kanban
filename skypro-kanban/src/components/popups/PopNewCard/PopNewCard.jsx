import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { postTodo } from "../../../api/api";
import { useUser } from "../../../hooks/useUser";
import * as S from "./PopNewCard.styled";
import { useTasks } from "../../../hooks/useTasks";

export default function PopNewCard() {
  const { user } = useUser();
  const { setCards } = useTasks();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
      token: user.token,
    };
    await postTodo(taskData).then((data) => {
      setCards(data.tasks);
      console.log(data.tasks);
      navigate(appRoutes.HOME);
    });
  };

  return (
    <S.PopNewCardStyled>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <Link to={appRoutes.HOME}>
              <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
            </Link>
            <S.PopNewCardWrap>
              <S.PopNewCardForm>
                <S.FormNewBlock>
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <S.FormNewInputArea
                    type="textarea"
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.FormNewInputArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopNewCardWrap>
            <S.PopNewCategories>
              <S.PopNewCategoriesSubtitle>Категория</S.PopNewCategoriesSubtitle>
              <S.PopNewCategoriesThemes>
                <input
                  type="radio"
                  id="radio1"
                  name="topic"
                  value="Web Design"
                  onChange={handleInputChange}
                />
                <S.ThemeWebDesign htmlFor="radio1">Web Design</S.ThemeWebDesign>

                <input
                  type="radio"
                  id="radio2"
                  name="topic"
                  value="Research"
                  onChange={handleInputChange}
                />
                <S.ThemeResearch htmlFor="radio2">Research</S.ThemeResearch>

                <input
                  type="radio"
                  id="radio3"
                  name="topic"
                  value="Copywriting"
                  onChange={handleInputChange}
                />
                <S.ThemeCopywriting htmlFor="radio3">
                  Copywriting
                </S.ThemeCopywriting>
              </S.PopNewCategoriesThemes>
            </S.PopNewCategories>
            {/* <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div> */}
            <S.FormNewSubmit onClick={handleFormSubmit}>
              Создать задачу
            </S.FormNewSubmit>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCardStyled>
  );
}
