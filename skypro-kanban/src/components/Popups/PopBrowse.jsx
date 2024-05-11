import Button from "../Button/Button";
import Calendar from "../Calendar/Calendar";
import { StyledPopUp } from "./PopUp.styled";

const PopBrowse = () => {
  return (
    <StyledPopUp>
      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl">Название задачи</h3>
                <div className="categories__theme theme-top _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>
                <div className="status__themes">
                  <div className="status__theme _hide">
                    <p>Без статуса</p>
                  </div>
                  <div className="status__theme _gray">
                    <p className="_gray">Нужно сделать</p>
                  </div>
                  <div className="status__theme _hide">
                    <p>В работе</p>
                  </div>
                  <div className="status__theme _hide">
                    <p>Тестирование</p>
                  </div>
                  <div className="status__theme _hide">
                    <p>Готово</p>
                  </div>
                </div>
              </div>
              <div className="pop-browse__wrap">
                <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                  <div className="form-browse__block">
                    <label htmlFor="textArea01" className="subttl">
                      Описание задачи
                    </label>
                    <textarea
                      className="form-browse__area"
                      name="text"
                      id="textArea01"
                      readOnly
                      placeholder="Введите описание задачи..."
                    ></textarea>
                  </div>
                </form>
                <Calendar />
              </div>
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <Button text="Редактировать задачу" className="btn-browse__edit _btn-bor _hover03" />
                  <Button text="Удалить задачу" className="btn-browse__delete _btn-bor _hover03" />
                </div>
                <Button text="Закрыть" className="btn-browse__close _btn-bg _hover01" />
              </div>
              <div className="pop-browse__btn-edit _hide">
                <div className="btn-group">
                  <Button text="Сохранить" className="btn-edit__edit _btn-bg _hover01" />
                  <Button text="Отменить" className="btn-edit__edit _btn-bor _hover03" />
                  <Button text="Удалить задачу" id="btnDelete" className="btn-edit__delete _btn-bor _hover03" />
                </div>
                <Button text="Закрыть" className="btn-edit__close _btn-bg _hover01" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledPopUp>
  );
};

export default PopBrowse;
