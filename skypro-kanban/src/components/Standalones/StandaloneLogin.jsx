import React from "react";
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
import { loginUser } from "../../api";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

const StandaloneLogin = ({ setUser }) => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    login: "",
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

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!formFields.login) {
      throwError("Укажите логин!");
      return;
    }

    if (!formFields.password) {
      throwError("Укажите пароль!");
      return;
    }

    try {
      const response = await loginUser({ login: formFields.login, password: formFields.password });

      throwSuccess("Вход успешен!");

      setTimeout(() => {
        setUser(response.user);
        navigate(AppRoutesList.Main);
      }, 500);
    } catch (error) {
      if (error.message == "Failed to fetch") {
        throwError("Проверьте интернет-соединнение!");
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
              <h2>Вход</h2>
            </StyledModalTitle>
            <StyledModalFormLogin id="formLogIn" onSubmit={handleLogin}>
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
              <Button $width={"100%"} text={"Войти"} type="submit"></Button>
              <StyledModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={AppRoutesList.Register}>Регистрируйтесь здесь</Link>
              </StyledModalFormGroup>
            </StyledModalFormLogin>
          </StyledModalBlock>
        </StyledModal>
        <ToastContainer />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default StandaloneLogin;
