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
import { Link, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppRoutesList } from "../../AppRoutesList";
import { registerUser } from "../../api";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

const StandaloneRegistration = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    login: "",
    name: "",
    password: "",
  });

  const throwError = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  };

  const throwSuccess = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleReister = async (event) => {
    event.preventDefault();

    if (!formFields.name) {
      throwError("Укажите имя!");
      return;
    }

    if (!formFields.login) {
      throwError("Укажите логин!");
      return;
    }

    if (!formFields.password) {
      throwError("Укажите пароль!");
      return;
    }

    try {
      await registerUser({
        login: formFields.login,
        name: formFields.name,
        password: formFields.password,
      });

      throwSuccess("Вы успешно зарегистрировались!");

      setTimeout(() => {
        // navigate(AppRoutesList.Login);
      }, 1000);
    } catch (error) {
      if (error.message == "Failed to fetch") {
        throwError("Провертьте интернет-соединнение");
      } else {
        throwError(error.message);
      }
    }
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledModal>
          <StyledModalBlock>
            <StyledModalTitle>
              <h2>Регистрация</h2>
            </StyledModalTitle>
            <StyledModalFormLogin id="formLogIn" onSubmit={handleReister}>
              <Input type="text" name="name" placeholder="Имя" value={formFields.name} onChange={handleInputChange} />
              <Input
                type="text"
                name="login"
                placeholder="Эл. почта"
                value={formFields.login}
                onChange={handleInputChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Пароль"
                value={formFields.password}
                onChange={handleInputChange}
              />
              <Button $width={"100%"} text={"Зарегистрироваться"} type="submit"></Button>
              <StyledModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to={AppRoutesList.Login}>Войдите здесь</Link>
                </p>
              </StyledModalFormGroup>
            </StyledModalFormLogin>
          </StyledModalBlock>
        </StyledModal>
        <ToastContainer />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default StandaloneRegistration;
