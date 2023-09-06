import { createBrowserRouter } from "react-router-dom";
import HomesList from "./Pages/HomesList";
import AppLayout from "./Pages/AppLayout";

import WishList from "./Pages/WishList";
import Messages from "./Pages/Messages";
import Trips from "./Pages/Trips";
import NotFound from "./Pages/NotFound";
import Account from "./Pages/Account";
import Reservation from "./Pages/Reservation";
import Homedetails from "./Pages/Homedetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomesList /> },
      { path: "/home", element: <HomesList /> },
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
