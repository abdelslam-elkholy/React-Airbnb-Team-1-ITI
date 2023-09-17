import React from "react";
import Account from "./Components/Account/Account";
import { BrowserRouter } from "react-router-dom";
import PersonalInfo from "./Components/Account/PersonalInfo/PersonalInfo";
import LoginAndSecurity from "./Components/Account/LoginAndSecurity/LoginAndSecurity";
import PaymentsAndPayouts from "./Components/Account/PaymentsAndPayouts/PaymentsAndPayouts";
import Taxes from "./Components/Account/Taxes/Taxes";
import Notifications from "./Components/Account/Notifications/Notifications";
import PrivacyAndSharing from "./Components/Account/PrivacyAndSharing/PrivacyAndSharing";
import GlobalPreferences from "./Components/Account/GlobalPreferences/GlobalPreferences";
import TravelForWork from "./Components/Account/TravelForWork/TravelForWork";

const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Account /> */}
      {/* <PersonalInfo /> */}
      {/* <LoginAndSecurity /> */}
      {/* <PaymentsAndPayouts /> */}
      {/* <Taxes /> */}
      {/* <Notifications /> */}
      {/* <PrivacyAndSharing /> */}
      {/* <GlobalPreferences /> */}
      <TravelForWork />
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
