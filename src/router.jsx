import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import WishList from "./Pages/WishList";
import Messages from "./Pages/Messages/Messages";
import Trips from "./Pages/Trips/Trips";
import NotFound from "./Pages/NotFound";
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
import SuccessPayment from "./Pages/SuccessPayment";
import SomethingWrong from "./Pages/SomethingWrong";
import Homes from "./Pages/Homes/Homes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/homedetails/:id", element: <Homedetails /> },
      { path: "/wishlist", element: <WishList /> },
      { path: "/messages", element: <Messages /> },
      { path: "/trips", element: <Trips /> },
      { path: "/success", element: <SuccessPayment /> },
      { path: "/failed", element: <SomethingWrong /> },
      {
        path: "/account",
        element: <Account />,
        children: [
          { index: true, element: <Account /> },
          { path: "account/personalInfo", element: <PersonalInfo /> },
          { path: "account/loginAndSecurity", element: <LoginAndSecurity /> },
          {
            path: "account/paymentsAndPayouts",
            element: <PaymentsAndPayouts />,
          },
          { path: "account/taxes", element: <Taxes /> },
          { path: "account/notifications", element: <Notifications /> },
          { path: "account/privacyAndSharing", element: <PrivacyAndSharing /> },
          { path: "account/globalPreferences", element: <GlobalPreferences /> },
          { path: "account/travelForWork", element: <TravelForWork /> },
        ],
      },
      // { path: "/reservation", element: <Reservation /> },
      // { path: "/account", element: <Account /> },
      // { path: "/personalInfo", element: <PersonalInfo /> },
      // { path: "/loginAndSecurity", element: <LoginAndSecurity /> },
      // { path: "/paymentsAndPayouts", element: <PaymentsAndPayouts /> },
      // { path: "/taxes", element: <Taxes /> },
      // { path: "/notifications", element: <Notifications /> },
      // { path: "/privacyAndSharing", element: <PrivacyAndSharing /> },
      // { path: "/globalPreferences", element: <GlobalPreferences /> },
      // { path: "/travelForWork", element: <TravelForWork /> },
      { path: "/message", element: <Messages /> },
      { path: "/host/homes", element: <Homes /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
