import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/home/index";
import App from "./app";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
