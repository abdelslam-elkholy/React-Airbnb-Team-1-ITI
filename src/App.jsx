import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./Store/store";
import { UserProvider } from "./Context/UserContext";
const App = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Provider>
  );
};

export default App;
