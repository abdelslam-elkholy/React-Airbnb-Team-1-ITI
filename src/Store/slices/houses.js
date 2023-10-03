import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../AxiosConfig/instance";

const fetchHouses = createAsyncThunk("houses/fetchHouses", async (category) => {
  const response = await instance.get(
    "/houses",
    category
      ? {
          params: {
            category,
          },
        }
      : null
  );
  console.log(response.data.data);
  return response.data.data;
});

const housesSlice = createSlice({
  name: "houses",
  initialState: {
    houses: [],
    category: null,
  },

  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchHouses.fulfilled, (state, action) => {
      state.houses = action.payload.houses;
    });
  },
});

export const { setCategory } = housesSlice.actions;
export { fetchHouses };
export default housesSlice.reducer;
