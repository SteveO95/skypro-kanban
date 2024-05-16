import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { StyledPopUp, StyledPopUpExitFormGroup } from "./PopUp.styled";

const PopExit = ({ logout }) => {
  return (
    <StyledPopUp>
      <StyledPopUp className="pop-exit" id="popExit">
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <form id="formExit">
              <StyledPopUpExitFormGroup>
                <Button $width={"119px"} text={"Да, выйти"} onClick={logout}></Button>
                <Link to={"/"}>
                  <Button $inverted $width={"119px"} text={"Нет, остаться"}></Button>
                </Link>
              </StyledPopUpExitFormGroup>
            </form>
          </div>
        </div>
      </StyledPopUp>
    </StyledPopUp>
  );
};

export default PopExit;
