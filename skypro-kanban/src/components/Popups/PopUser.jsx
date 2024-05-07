import Button from "../Button/Button";

const PopUser = () => {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <Button link="modal/signin.html" text="Да, выйти" id="exitYes" className="pop-exit__exit-yes _hover01" />
              <Button link="main.html" text="Нет, остаться" id="exitNo" className="pop-exit__exit-no _hover03" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUser;
