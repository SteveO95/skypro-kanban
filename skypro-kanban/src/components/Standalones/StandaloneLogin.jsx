import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  StyledWrapper,
  StyledContainer,
  StyledModal,
  StyledModalBlock,
  StyledModalTitle,
  StyledModalFormLogin,
  StyledModalFormGroup,
} from "./Standalones.styled";
import { AppRoutesList } from "../../AppRoutesList";

const StandaloneLogin = ({ authUser }) => {
  const navigate = useNavigate();
  const auth = () => {
    authUser(true);
    navigate("/");
  };
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledModal>
          <StyledModalBlock>
            <StyledModalTitle>
              <h2>Вход</h2>
            </StyledModalTitle>
            <StyledModalFormLogin id="formLogIn" action="#">
              <Input type="text" name="login" id="formlogin" placeholder="Эл. почта" />
              <Input type="password" name="password" id="formpassword" placeholder="Пароль" />
              <Button $width={"100%"} onClick={auth} text={"Войти"}></Button>
              <StyledModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={AppRoutesList.Register}>Регистрируйтесь здесь</Link>
              </StyledModalFormGroup>
            </StyledModalFormLogin>
          </StyledModalBlock>
        </StyledModal>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default StandaloneLogin;
