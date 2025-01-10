import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import Search from "../pages/books/Search";

const router =createBrowserRouter([
    {
        path: "/",
        element: <App/>,  
        children: [
            {
                path: "/",
                element:<Register/>
            },
            {
                path: "/login",
                element:<Login/>
            },
            {///:id
                path:"/home",
                element:<Home/>
            },
            {
                path:"/cart",
                element:<CartPage/>
            },
            {
                path:"/checkout",
                element:<CheckoutPage/>
            },
            {
                path:"/orders",
                element: <h1>Orders</h1>
            },
            {
                path:"/search",
                element:<Search/>
            },
        ]
    },
]);
export default router;