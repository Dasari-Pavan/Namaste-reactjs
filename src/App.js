import React from "react";
import ReactDoM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout=()=>{
  return (
    <div className="container-fluid">
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/About",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resid",  //dynamic path
        element:<RestaurantMenu/>
      }
  ],
  errorElement:<Error/>,
},
]);
const root=ReactDoM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>)