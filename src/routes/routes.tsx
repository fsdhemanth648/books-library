import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <h1>Home Children</h1> },
      { path: "/orders", element: <h1>Order Page</h1> },
      { path: "/about", element: <h1>About</h1> },
    ],
  },
]);

export default router;