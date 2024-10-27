import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeContainer from "../containers/home";
import LoginContainer from "../containers/login";
import RegisterContainer from "../containers/register";
import CartContainer from "../containers/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomeContainer /> },
      { path: "/orders", element: <h1>Order Page</h1> },
      { path: "/about", element: <h1>About</h1> },
      { path: "/login", element: <LoginContainer /> },
      { path: "/register", element: <RegisterContainer /> },
      { path: "/cart", element: <CartContainer /> },
    ],
  },
]);

export default router;
