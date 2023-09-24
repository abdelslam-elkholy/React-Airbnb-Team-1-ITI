import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../AxiosConfig/instance";

const fetchHouses = createAsyncThunk("houses/fetchHouses", async () => {
  const response = await instance.get("/houses");
  console.log(response.data.data);
  return response.data.data;
});

const housesSlice = createSlice({
  name: "houses",
  initialState: {
    houses: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHouses.fulfilled, (state, action) => {
      state.houses = action.payload.houses;
      console.log(state.houses);
    });
  },
});

export const { addHouse } = housesSlice.actions;
export { fetchHouses };
export default housesSlice.reducer;
