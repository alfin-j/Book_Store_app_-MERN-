import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import Search from "../pages/books/Search";
import PrivateRoute from "../components/PrivateRoute";

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
                element:(<PrivateRoute>
                    <Home/>
                </PrivateRoute>)
            },
            {
                path:"/cart",
                element:(<PrivateRoute>
                    <CartPage/>
                </PrivateRoute>)
            },
            {
                path:"/checkout",
                element:(<PrivateRoute>
                    <CheckoutPage/>
                </PrivateRoute>)
            },
            {
                path:"/orders",
                element: (<PrivateRoute>
                    <h1>Orders</h1>
                </PrivateRoute>)
            },
            {
                path:"/search",
                element:(<PrivateRoute>
                    <Search/>
                </PrivateRoute>)
            },
        ]
    },
]);
export default router;