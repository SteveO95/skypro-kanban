import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import * as S from "../../styled/common/SignPages.styled";
import { GlobalStyleSignPage } from "../../styled/global/SignPagesGlobal.styled";
import { useState } from "react";
import { signIn } from "../../api/api";
import { useUser } from "../../hooks/useUser";

export default function SignIn() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const [isNotCorrect, setIsNotCorrect] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn(loginData)
      .then((data) => {
        login(data.user);
        navigate(appRoutes.HOME);
      })
      .catch(() => {
        setIsNotCorrect(true);
      });
  };

  return (
    <>
      <GlobalStyleSignPage />
      <S.WrapperSignPage>
        <S.ContainerSignPage>
          <S.ModalSignPage>
            <S.ModalBlockSignPage>
              <S.ModalTitleSignPage>
                <h2>Вход</h2>
              </S.ModalTitleSignPage>
              <S.ModalFormLoginSignPage>
                <S.ModalInputSignPage
                  value={loginData.login}
                  onChange={handleInputChange}
                  type="text"
                  name="login"
                  placeholder="Эл. почта"
                />
                <S.ModalInputSignPage
                  value={loginData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  placeholder="Пароль"
                />
                <S.ModalButtonEnterSignPage onClick={handleLogin}>
                  Войти
                </S.ModalButtonEnterSignPage>
                {isNotCorrect
                  ? "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
                  : ""}
                <S.ModalFormGroupSignPage>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={appRoutes.SIGNUP}>
                    <span>Регистрируйтесь здесь</span>
                  </Link>
                </S.ModalFormGroupSignPage>
              </S.ModalFormLoginSignPage>
            </S.ModalBlockSignPage>
          </S.ModalSignPage>
        </S.ContainerSignPage>
      </S.WrapperSignPage>
    </>
  );
}
