import { createBrowserRouter } from "react-router-dom";
import HomesList from "./Components/HomesList";
import AppLayout from "./Components/AppLayout";
import Homedetails from "./Components/Homedetails";
import WishList from "./Components/WishList";
import Messages from "./Components/Messages";
import Trips from "./Components/Trips";
import NotFound from "./Components/NotFound";
import Account from "./Components/Account";
import Reservation from "./Components/Reservation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomesList /> },
      { path: "/home", element: <HomesList /> },
      { path: "/home/:id", element: <Homedetails /> },
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
