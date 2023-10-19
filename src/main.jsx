import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import Signin from './components/SignIn';
import SignUp from './components/Signup';
import AuthProvider from './provider/AuthProvider';
import Login from './Pages/login/login';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Register from './Pages/Register/Register';
import Amazon from './Pages/Amazon/Amazon';
import BestBay from './Pages/BestBay/BestBay';
import EBay from './Pages/EBay/EBay';
import Target from './Pages/Target/Target';
import Walmart from './Pages/Walmart/Walmart';
import Flipkart from './Pages/flipkart/flipkart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      
      {
        path: '/flipkart',
        element: <Flipkart></Flipkart>
      },
      {
        path: '/amazon',
        element: <Amazon></Amazon>
      },
      {
        path: '/bestbay',
        element: <BestBay></BestBay>
      },
      {
        path: '/ebay',
        element: <EBay></EBay>
      },
      {
        path: '/target',
        element: <Target></Target>
      },
      {
        path: '/walmart',
        element: <Walmart></Walmart>
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,


      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
