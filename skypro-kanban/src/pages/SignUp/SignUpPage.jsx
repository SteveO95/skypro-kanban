import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../api/api";
import * as S from "../../styled/common/SignPages.styled";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";

export default function SignUp() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signUp(loginData).then((data) => {
      login(data.user);
      navigate(appRoutes.HOME);
    });
  };

  return (
    <S.WrapperSignPage>
      <S.ContainerSignPage>
        <S.ModalSignPage>
          <S.ModalBlockSignPage>
            <S.ModalTitleSignPage>
              <h2>Регистрация</h2>
            </S.ModalTitleSignPage>
            <S.ModalFormLoginSignPage>
              <S.ModalInputSignPage
                onChange={handleInputChange}
                type="text"
                name="name"
                id="first-name"
                placeholder="Имя"
              />
              <S.ModalInputSignPage
                onChange={handleInputChange}
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.ModalInputSignPage
                onChange={handleInputChange}
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.ModalButtonEnterSignPage onClick={handleSignUp}>
                Зарегистрироваться
              </S.ModalButtonEnterSignPage>
              <S.ModalFormGroupSignPage>
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={appRoutes.SIGNIN}>Войдите здесь</Link>
                </p>
              </S.ModalFormGroupSignPage>
            </S.ModalFormLoginSignPage>
          </S.ModalBlockSignPage>
        </S.ModalSignPage>
      </S.ContainerSignPage>
    </S.WrapperSignPage>
  );
}
