import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  state: "idle",
  value: [],
  error: {},
  select: {},
};

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ firstName, lastName,  email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        "https://www.se-bistro.online/api/v1/auth/signUp",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log("data", data);
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log("Error", error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.username = payload.user.name;
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});

// Action creators are generated for each case reducer function
// export const {  } = userSlice.actions;

export default userSlice.reducer;
