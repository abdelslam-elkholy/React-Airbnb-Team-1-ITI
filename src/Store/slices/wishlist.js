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

// make a function to check if the house is in the wishlist
// if it is, then delete it
// if it is not, then add it
// the function happens locally, and then the delete/add wishlist is called
// the delete/add wishlist will update the state

const checkWishlist = (houseId) => {
  return (dispatch, getState) => {
    const wishlist = getState().wishlist.wishlist;
    const house = wishlist.find((house) => house.id === houseId);
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

  reducers: {
    setWishlist(state, action) {
      state.wishlist = action.payload;
    },
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
        (house) => house.id !== action.payload.id
      );
    });
  },
});

export const { setWishlist } = wishlistSlice.actions;
export { fetchWishlist, addWishlist, deleteWishlist, checkWishlist };
export default wishlistSlice.reducer;
