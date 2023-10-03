import { configureStore } from "@reduxjs/toolkit";
import housesReducer from "./slices/houses";
import wishlistReducer from "./slices/wishlist";
const store = configureStore({
  reducer: {
    houses: housesReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
