import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"
import HomePage from './../components/Page/HomePage/index.jsx';
import CartPage from "../components/Page/CartPage/index.jsx";
import Detail  from "../components/ProductsList/ProductDetail.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products/detail/:index",
    element: <Detail/>
  },
  {
    path: "/cart",
    element: <CartPage/>
  },
]);

export default router