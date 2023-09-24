import { configureStore } from "@reduxjs/toolkit";
import housesReducer from "./slices/houses";

const store = configureStore({
  reducer: {
    houses: housesReducer,
  },
});

export default store;
