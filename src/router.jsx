// import { createBrowserRouter } from "react-router-dom";
// import HomesList from "./Components/HomesList";
// import AppLayout from "./Components/AppLayout";
// import Homedetails from "./Components/Homedetails";
// import WishList from "./Components/WishList";
// import Messages from "./Components/Messages";
// import Trips from "./Components/Trips";
// import NotFound from "./Components/NotFound";
// import Reservation from "./Components/Reservation";
// import PersonalInfo from "./Components/Account/PersonalInfo";
// import LoginAndSecurity from "./Components/Account/LoginAndSecurity";
// import PaymentsAndPayouts from "./Components/Account/PaymentsAndPayouts/PaymentsAndPayouts";
// import Taxes from "./Components/Account/Taxes/Taxes";
// import Notifications from "./Components/Account/Notifications/Notifications";
// import PrivacyAndSharing from "./Components/Account/PrivacyAndSharing/PrivacyAndSharing";
// import GlobalPreferences from "./Components/Account/GlobalPreferences/GlobalPreferences";
// import TravelForWork from "./Components/Account/TravelForWork/TravelForWork";
// import Account from "./Components/Pages/Account/Account";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       { index: true, element: <HomesList /> },
//       { path: "/home", element: <HomesList /> },
//       { path: "/home/:id", element: <Homedetails /> },
//       { path: "/wishlist", element: <WishList /> },
//       { path: "/messages", element: <Messages /> },
//       { path: "/trips", element: <Trips /> },
//       {
//         path: "/account",
//         element: <Account />,
//         // children: [{ path: "personalInfo", element: <PersonalInfo /> }],
//       },
//       { path: "/personalInfo", element: <PersonalInfo /> },
//       { path: "/loginAndSecurity", element: <LoginAndSecurity /> },
//       { path: "/paymentsAndPayouts", element: <PaymentsAndPayouts /> },
//       { path: "/taxes", element: <Taxes /> },
//       { path: "/notifications", element: <Notifications /> },
//       { path: "/privacyAndSharing", element: <PrivacyAndSharing /> },
//       { path: "/globalPreferences", element: <GlobalPreferences /> },
//       { path: "/travelForWork", element: <TravelForWork /> },
//       { path: "/reservation", element: <Reservation /> },
//     ],
//   },

//   { path: "*", element: <NotFound /> },
// ]);

// export default router;
