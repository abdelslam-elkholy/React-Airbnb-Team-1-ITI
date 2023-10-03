import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../AxiosConfig/instance";

const fetchWishlist = createAsyncThunk("wishlist/fetchWishlist", async () => {
  const response = await instance.get("/wishlists/me");
  console.log(response.data.data);
  return response.data.data;
});

const addWishlist = createAsyncThunk(
  "wishlist/addWishlist",
  async (houseId) => {
    const response = await instance.post("/wishlists", { houseId });
  }
);

const deleteWishlist = createAsyncThunk(
  "wishlist/deleteWishlist",
  async (houseId) => {
    const response = await instance.delete(`/wishlists/${houseId}`);
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
  },
});

export { fetchWishlist, addWishlist, deleteWishlist };
export default wishlistSlice.reducer;
