import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/product-list/ProductList";
import Home from "./pages/Home";
import Login from "./features/auth/components/Login";
import LoginPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from "./features/cart/Cart";
import CartPage from "./pages/cartPage";
import CheckOut from "./pages/CheckOut";
import ProductDetails from "./features/product-list/components/ProductDetails";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Protected from "./features/auth/components/Protected";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Home></Home></Protected>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <Protected><CartPage></CartPage></Protected>
  },
  {
    path: "/checkout",
    element: <Protected><CheckOut></CheckOut></Protected>
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailsPage></ProductDetailsPage></Protected>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
