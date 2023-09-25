import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import WishList from "./Pages/WishList";
import Messages from "./Pages/Messages/Messages";
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
import PaymentHome from "./Pages/Reservation/PaymentHome";
import PaymentForm from "./Components/Reservation/Payment_Form/PaymentForm";
import Credit from "./Components/Reservation/Payment_Form/Credit";
import PayPal from "./Components/Reservation/Payment_Form/PayPal";
import GooglePay from "./Components/Reservation/Payment_Form/GooglePay";
import Homes from "./Pages/Homes/Homes";
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
      { path: "/reservation", element: <Reservation /> },
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
      {
        path: "/reservation",
        element: <PaymentHome />,
        children: [
          {
            path: "/reservation/",
            element: <PaymentForm />,
            children: [
              { index: true, element: <Credit /> },
              { path: "/reservation/Credit", element: <Credit /> },
              { path: "/reservation/PayPal", element: <PayPal /> },
              { path: "/reservation/GooglePay", element: <GooglePay /> },
            ],
          },
        ],
      },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
