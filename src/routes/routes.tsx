import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeContainer from "../containers/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomeContainer /> },
      { path: "/orders", element: <h1>Order Page</h1> },
      { path: "/about", element: <h1>About</h1> },
    ],
  },
]);

export default router;
