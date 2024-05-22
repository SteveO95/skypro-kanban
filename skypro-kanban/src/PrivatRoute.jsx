import { Navigate, Outlet } from "react-router-dom";
import { AppRoutesList } from "./AppRoutesList";

function PrivatRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to={AppRoutesList.Login} />;
}

export default PrivatRoute;
