import  Root  from "../Root/Root";
import {
    createBrowserRouter, 
  } from "react-router-dom";
import Home from "../components/Home/Home"; 
import Register from "../components/Register";
import Login from "../components/Login";
import ErrorPage from './../components/ErrorPage';
import AddCraftItem from "../components/ArtAndCraft/AddCraftItem"; 
import ViewDetails from "../components/CardPage/ViewDetails";
import AllArtAndCraft from "../components/CardPage/AllArtAndCraft";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children:[
       {
        path:'/',
        element: <Home/>,
        loader: () => fetch('http://localhost:5000/art')
       },
       {
        path: '/register',
        element: <Register/>
       },
       {
        path: '/login',
        element: <Login/>
       },
       {
        path: '/addcraft',
        element: <AddCraftItem/>
       }, 
       {
        path: '/details/:id',
        element: <ViewDetails></ViewDetails>,
        loader : ()=> fetch('http://localhost:5000/art')
       },
       {
        path: '/allart',
        element: <AllArtAndCraft></AllArtAndCraft> 
       }
      ]
    },
  ]);


  export default router