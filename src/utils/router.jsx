import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"
import { HomePage } from "../components/index.jsx";
import Detail from "../components/ProductsList/ProductDetail.jsx"; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products/detail/:index",
    element: <Detail/>
  }
]);

export default router