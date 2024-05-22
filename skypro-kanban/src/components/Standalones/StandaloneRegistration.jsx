import {
  StyledWrapper,
  StyledContainer,
  StyledModal,
  StyledModalBlock,
  StyledModalTitle,
  StyledModalFormLogin,
  StyledModalFormGroup,
} from "./Standalones.styled";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppRoutesList } from "../../AppRoutesList";

const StandaloneRegistration = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(AppRoutesList.Login);
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledModal>
          <StyledModalBlock>
            <StyledModalTitle>
              <h2>Регистрация</h2>
            </StyledModalTitle>
            <StyledModalFormLogin id="formLogIn" action="#">
              <Input type="text" name="first-name" id="first-name" placeholder="Имя" />
              <Input type="text" name="login" id="loginReg" placeholder="Эл. почта" />
              <Input type="password" name="password" id="passwordFirst" placeholder="Пароль" />
              <Button $width={"100%"} text={"Зарегистрироваться"} onClick={goToLogin}></Button>
              <StyledModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to={AppRoutesList.Login}>Войдите здесь</Link>
                </p>
              </StyledModalFormGroup>
            </StyledModalFormLogin>
          </StyledModalBlock>
        </StyledModal>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default StandaloneRegistration;
