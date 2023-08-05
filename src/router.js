import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/home/index";
import Signin from "./Pages/sign-in/index";
import User from "./Pages/user/index";
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
      },{
        path:"/Sign-in",
        element:<Signin />
      },{
        path:"/user",
        element:<User />
      }
    ],
  },
]);

export default Router;
