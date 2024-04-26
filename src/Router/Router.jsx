import  Root  from "../Root/Root";
import {
    createBrowserRouter, 
  } from "react-router-dom";
import Home from "../components/Home/Home"; 
import Register from "../components/Register";
import Login from "../components/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
       {
        path:'/',
        element: <Home/>
       },
       {
        path: '/register',
        element: <Register/>
       },
       {
        path: '/login',
        element: <Login/>
       }
      ]
    },
  ]);


  export default router