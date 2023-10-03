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
    const response = await instance.delete("/wishlists", {
      params: { id: houseId },
    });
    return response.data.data;
  }
);

const checkWishlist = (houseId) => {
  return (dispatch, getState) => {
    const wishlist = getState().wishlist.wishlist;
    const house = wishlist.find((house) => house._id === houseId);
    if (house) {
      dispatch(deleteWishlist(houseId));
    } else {
      dispatch(addWishlist(houseId));
    }
  };
};

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
      state.wishlist.push(action.payload);
    });
    builder.addCase(deleteWishlist.fulfilled, (state, action) => {
      state.wishlist = state.wishlist.filter(
        (house) => house._id !== action.payload.id
      );
    });
  },
});

export { fetchWishlist, addWishlist, deleteWishlist, checkWishlist };
export default wishlistSlice.reducer;
