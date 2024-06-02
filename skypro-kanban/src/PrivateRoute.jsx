import { Navigate, Outlet } from "react-router-dom";
import { AppRoutesList } from "./AppRoutesList";

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to={AppRoutesList.Login} />;
}

export default PrivateRoute;
