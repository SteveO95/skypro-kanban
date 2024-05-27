import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CardPage from "./pages/CardPage";
import PrivateRoute from "./PrivateRoute";
import { useState } from "react";
import { AppRoutesList } from "./AppRoutesList";

const AppRoutes = () => {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={user} />}>
        <Route path={AppRoutesList.Main} element={<MainPage user={user} />}>
          <Route path={AppRoutesList.SelectedCard} element={<CardPage />} />
          <Route path={AppRoutesList.Exit} element={<ExitPage setUser={setUser} />} />
        </Route>
      </Route>

      <Route path={AppRoutesList.Login} element={<LoginPage setUser={setUser} />} />
      <Route path={AppRoutesList.Register} element={<RegistrationPage />} />
      <Route path={AppRoutesList.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
