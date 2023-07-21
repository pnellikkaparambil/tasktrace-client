import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page.js";

import Index from "./pages/index.js";
import AdminLayout from "./modules/admin/layout.js";
import HomePage from "./modules/admin/pages/home.js";
import SettingsPage from "./modules/admin/pages/settings.js";
import AuthLayout from "./modules/auth/layout.js";
import LoginPage from "./modules/auth/pages/login.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate to="login" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
