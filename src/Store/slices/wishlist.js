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

  reducers: {
    toggleWishlist: (state, action) => {
      const houseId = action.payload.houseId;
      const houseIndex = state.wishlist.findIndex(
        (house) => house._id === houseId
      );
      if (houseIndex >= 0) {
        state.wishlist.splice(houseIndex, 1);
        addWishlist(houseId);
      } else {
        state.wishlist.push(action.payload.house);
        deleteWishlist(houseId);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWishlist.fulfilled, (state, action) => {
      state.wishlist = action.payload.wishlist;
    });
  },
});

export { fetchWishlist };
export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
