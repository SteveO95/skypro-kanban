import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CardPage from "./pages/CardPage";
import PrivatRoute from "./PrivatRoute";
import { useState } from "react";
import { AppRoutesList } from "./AppRoutesList";

const AppRoutes = () => {
  const [isAuth, setAuth] = useState(false);

  return (
    <Routes>
      <Route element={<PrivatRoute isAuth={isAuth} />}>
        <Route path={AppRoutesList.Main} element={<MainPage />}>
          <Route path={AppRoutesList.SelectedCard} element={<CardPage />} />
          <Route path={AppRoutesList.Exit} element={<ExitPage authUser={setAuth} />} />
        </Route>
      </Route>

      <Route path={AppRoutesList.Login} element={<LoginPage authUser={setAuth} />} />
      <Route path={AppRoutesList.Register} element={<RegistrationPage />} />
      <Route path={AppRoutesList.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
