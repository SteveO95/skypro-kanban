import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { AppRoutesList } from "./AppRoutesList";

import { useLocalStorage } from "./useLocalStorage";
import { UserContext } from "./context/user";

import NewCardPage from "./pages/NewCardPage";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CardPage from "./pages/CardPage";

const AppRoutes = () => {
  const [user, setValue] = useLocalStorage("user", null);

  const updateUser = (newUser) => {
    setValue(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <Routes>
        <Route element={<PrivateRoute isAuth={user} />}>
          <Route path={AppRoutesList.Main} element={<MainPage />}>
            <Route path={AppRoutesList.Card} element={<NewCardPage />} />
            <Route path={AppRoutesList.SelectedCard} element={<CardPage />} />
            <Route path={AppRoutesList.Exit} element={<ExitPage />} />
          </Route>
        </Route>

        <Route path={AppRoutesList.Login} element={<LoginPage />} />
        <Route path={AppRoutesList.Register} element={<RegistrationPage />} />
        <Route path={AppRoutesList.NotFound} element={<NotFoundPage />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default AppRoutes;
