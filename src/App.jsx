import React from "react";
import AppLayout from "./Components/AppLayout";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
