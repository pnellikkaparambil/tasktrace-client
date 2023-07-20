import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page.js";

import Index from "./pages/index.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
]);
