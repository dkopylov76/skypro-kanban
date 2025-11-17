import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "./Context/LoginContext";

function PrivateRoute() {
    const { user } = useContext(LoginContext);
    return user ? <Outlet /> : <Navigate to="/register" />;
}

export default PrivateRoute;