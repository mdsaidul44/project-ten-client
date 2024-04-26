import  Root  from "../Root/Root";
import {
    createBrowserRouter, 
  } from "react-router-dom";
import Home from "../components/Home/Home"; 
import Register from "../components/Register";


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
       }
      ]
    },
  ]);


  export default router