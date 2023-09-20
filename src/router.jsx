import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import WishList from "./Pages/WishList";
import Messages from "./Pages/Messages";
import Trips from "./Pages/Trips";
import NotFound from "./Pages/NotFound";
import Reservation from "./Pages/Reservation";
import Homedetails from "./Pages/Homedetails";
import Home from "./Pages/Home";
import Account from "./Pages/Account/Account";
import PersonalInfo from "./Components/Account/PersonalInfo/PersonalInfo";
import LoginAndSecurity from "./Components/Account/LoginAndSecurity/LoginAndSecurity";
import PaymentsAndPayouts from "./Components/Account/PaymentsAndPayouts/PaymentsAndPayouts";
import Taxes from "./Components/Account/Taxes/Taxes";
import Notifications from "./Components/Account/Notifications/Notifications";
import PrivacyAndSharing from "./Components/Account/PrivacyAndSharing/PrivacyAndSharing";
import GlobalPreferences from "./Components/Account/GlobalPreferences/GlobalPreferences";
import TravelForWork from "./Components/Account/TravelForWork/TravelForWork";

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
      { path: "/account", element: <Account /> },
      { path: "/personalInfo", element: <PersonalInfo /> },
      { path: "/loginAndSecurity", element: <LoginAndSecurity /> },
      { path: "/paymentsAndPayouts", element: <PaymentsAndPayouts /> },
      { path: "/taxes", element: <Taxes /> },
      { path: "/notifications", element: <Notifications /> },
      { path: "/privacyAndSharing", element: <PrivacyAndSharing /> },
      { path: "/globalPreferences", element: <GlobalPreferences /> },
      { path: "/travelForWork", element: <TravelForWork /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
