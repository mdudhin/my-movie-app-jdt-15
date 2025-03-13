import { Navigate, Outlet, useLocation } from "react-router";
import { useToken } from "../hooks/useToken";

const ProtectedRoutes: React.FC = () => {
  const { pathname } = useLocation();

  const { token } = useToken();

  const authProtected = ["/login"];
  const tokenProtected = ["/admin"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/admin" />;
  }

  if (tokenProtected.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
