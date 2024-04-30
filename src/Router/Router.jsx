import Root from "../Root/Root";
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
import AllCraftDetails from "../components/CardPage/AllCraftDetails";
import ArtSection from "../components/CardPage/ArtSection";
import ArtDetails from "../components/CardPage/ArtDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyArt from "../components/CardPage/MyArt/MyArt";
import UpdateArt from "../components/CardPage/MyArt/UpdateArt";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/art')
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/addcraft',
        element: <PrivateRoute><AddCraftItem /></PrivateRoute>
      },
      {
        path: '/details/:id',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('http://localhost:5000/art')
      },
      {
        path: '/allart',
        element: <AllArtAndCraft></AllArtAndCraft> 
      },
      {
        path: '/artdetails/:id',
        element: <PrivateRoute><AllCraftDetails /></PrivateRoute>,
        loader: () => fetch(`http://localhost:5000/art`)
      },
      {
        path:'/craft',
        element: <ArtSection/>,
        loader: () =>fetch('http://localhost:5000/craft')
      },
      {
        path: '/craftdetails/:id',
        element: <ArtDetails/>,
        loader: () => fetch(`http://localhost:5000/craft`)
      },
      {
        path: '/myart',
        element: <PrivateRoute><MyArt></MyArt></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/art')
      },
      {
        path: '/update/:id',
        element: <UpdateArt/> ,
        loader: ()=>fetch(`http://localhost:5000/art`)
      }
    ]
  },
]);


export default router