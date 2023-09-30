import { configureStore } from "@reduxjs/toolkit";
import housesReducer from "./slices/houses";
import accountReducer from "./slices/account";
const store = configureStore({
  reducer: {
    houses: housesReducer,
    account: accountReducer,
  },
});

export default store;
