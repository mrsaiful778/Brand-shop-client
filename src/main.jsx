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
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Details from './Pages/Details/Details';
import Update from './Pages/Update/Update';
import Contact from './Pages/contact/contact';


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
        element: <Flipkart></Flipkart>,
        
        loader: () => fetch('https://e-commerce-based.vercel.app/products')
      },
      {
        path: '/amazon',
        element: <Amazon></Amazon>,
        loader: () => fetch('https://e-commerce-based.vercel.app/products')
      },
      {
        path: '/bestbuy',
        element: <BestBay></BestBay>,
        
        loader: () => fetch('https://e-commerce-based.vercel.app/products')
      },
      {
        path: '/ebay',
        element: <EBay></EBay>,
        
        loader: () => fetch('https://e-commerce-based.vercel.app/products')
      },
      {
        path: '/target',
        element: <Target></Target>,
        
        loader: () => fetch('https://e-commerce-based.vercel.app/products')
      },
      {
        path: '/walmart',
        element: <Walmart></Walmart>,
        
        loader: () => fetch('https://e-commerce-based.vercel.app/products')
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch(`https://e-commerce-based-gmpm8plzf-mrsaifulislam778.vercel.app/carts`)
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://e-commerce-based.vercel.app/products/${params.id}`)


      },
      {
          path: '/update/:id',
          element: <Update></Update>,
          loader: ({params}) => fetch(`https://e-commerce-based.vercel.app/products/${params.id}`)
          
      },
      {
        path: '/contact',
        element: <Contact></Contact>
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
