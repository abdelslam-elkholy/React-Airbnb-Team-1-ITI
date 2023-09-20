import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import WishList from "./Pages/WishList";
import Messages from "./Pages/Messages";
import Trips from "./Pages/Trips";
import NotFound from "./Pages/NotFound";
import Account from "./Pages/Account";
import Reservation from "./Pages/Reservation";
import Homedetails from "./Pages/Homedetails";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/homedetails", element: <Homedetails /> },
      { path: "/wishlist", element: <WishList /> },
      { path: "/messages", element: <Messages /> },
      { path: "/trips", element: <Trips /> },
      { path: "/account", element: <Account /> },
      { path: "/reservation", element: <Reservation /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
