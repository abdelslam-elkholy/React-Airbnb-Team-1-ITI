import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import instance from "../../AxiosConfig/instance";

import Cookies from "js-cookie";

const authToken = Cookies.get("authToken");

const fetchAccount = createAsyncThunk("account/userAccount", async () => {
  try {
    const response = await instance.get("/users/getMe", {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
});

const accountSlice = createSlice({
  name: "account",
  initialState: {
    account: {},
  },
  reducers: {
    getuserData: (state, action) => {
      state.account = action.payload.account;
      //             console.log(state.account);
    },
  },
});

export const { getuserData } = accountSlice.actions;
export default accountSlice.reducer;

export { fetchAccount };
