import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../AxiosConfig/instance";

const fetchWishlist = createAsyncThunk("wishlist/fetchWishlist", async () => {
  const response = await instance.get("/wishlists/me");

  return response.data.data;
});

const addWishlist = createAsyncThunk(
  "wishlist/addWishlist",
  async (houseId) => {
    const response = await instance.post("/wishlists", { houseId });
    return response.data.data;
  }
);

const deleteWishlist = createAsyncThunk(
  "wishlist/deleteWishlist",
  async (houseId) => {
    const response = await instance.delete(`/wishlists/${houseId}`);
    return response.data.data;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },

  extraReducers: (builder) => {
    builder.addCase(fetchWishlist.fulfilled, (state, action) => {
      state.wishlist = action.payload.wishlist;
    });
    builder.addCase(addWishlist.fulfilled, (state, action) => {
      console.log(action.payload.wishlist);
      state.wishlist.push(action.payload.wishlist);
    });

    builder.addCase(deleteWishlist.fulfilled, (state, action) => {
      console.log(action.payload.wishlist.houseId);
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload.wishlist.houseId._id
      );
    });
  },
});

export { fetchWishlist, addWishlist, deleteWishlist };
export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
