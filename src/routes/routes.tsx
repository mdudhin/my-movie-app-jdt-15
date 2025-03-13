import { createBrowserRouter } from "react-router";
import Home from "../pages/home/home";
import DetailAdmin from "../pages/admin/detail-admin";
import Layout from "../layout";
import Login from "../pages/login/login";
import ProtectedRoutes from "./protectedRoutes";
import Admin from "../pages/admin/admin";
import Detail from "../pages/detail/detail";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <Admin />,
        path: "/admin",
      },
      {
        element: <DetailAdmin />,
        path: "/detail",
      },
      {
        element: <Login />,
        path: "/login",
      },
    ],
  },
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Detail />,
        path: "/detail",
      },
    ],
  },
]);
