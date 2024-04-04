import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/LayoutHolder/Layout";
import Homescreen from "../Pages/Homescreen";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
]);
