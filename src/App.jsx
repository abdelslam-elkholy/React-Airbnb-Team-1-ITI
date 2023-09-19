import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PersonalInfo from "./Components/Account/PersonalInfo/PersonalInfo";
import LoginAndSecurity from "./Components/Account/LoginAndSecurity/LoginAndSecurity";
import PaymentsAndPayouts from "./Components/Account/PaymentsAndPayouts/PaymentsAndPayouts";
import Taxes from "./Components/Account/Taxes/Taxes";
import Notifications from "./Components/Account/Notifications/Notifications";
import PrivacyAndSharing from "./Components/Account/PrivacyAndSharing/PrivacyAndSharing";
import GlobalPreferences from "./Components/Account/GlobalPreferences/GlobalPreferences";
import TravelForWork from "./Components/Account/TravelForWork/TravelForWork";
import Account from "./Components/Pages/Account/Account";
import AppLayout from "./AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
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
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter> */}
      {/* <Account /> */}
      {/* <PersonalInfo /> */}
      {/* <LoginAndSecurity /> */}
      {/* <PaymentsAndPayouts /> */}
      {/* <Taxes /> */}
      {/* <Notifications /> */}
      {/* <PrivacyAndSharing /> */}
      {/* <GlobalPreferences /> */}
      {/* <TravelForWork /> */}
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
