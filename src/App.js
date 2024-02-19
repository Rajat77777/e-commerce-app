

import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import Login from './features/auth/components/Login';
import LoginPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
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
    element: <Cart></Cart>,
  },
]);



function App() {
  return (
    <div className="App">
 <RouterProvider router={router} /></div>
 
  );
}

export default App;
