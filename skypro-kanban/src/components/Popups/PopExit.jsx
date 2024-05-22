import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { StyledPopUp, StyledPopUpExitFormGroup } from "./PopUp.styled";
import { AppRoutesList } from "../../AppRoutesList";
import { useNavigate } from "react-router-dom";

const PopExit = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate(AppRoutesList.Login);
  };

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
                <Button $width={"119px"} text={"Да, выйти"} onClick={handleLogout}></Button>
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
