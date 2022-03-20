import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const initialState = {
  state: 'idle',
  value: [],
  error: {},
  select: {},
};



export const loginUser = createAsyncThunk(
    "users/login",
    async ({ email, password }, thunkAPI) => {
      try {
        const response = await fetch(
          "https://www.se-bistro.online/api/v1/auth/signIn",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        )
        let data = await response.json()
        console.log("response", data)
        if (response.status === 200) {
          localStorage.setItem("token", data.token)
          return data
        } else {
          return thunkAPI.rejectWithValue(data)
        }
      } catch (error) {
        console.log("Error", error.response.data)
        thunkAPI.rejectWithValue(error.response.data)
      }
    }
  )

export const loginSlice = createSlice({
  
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
   

    [loginUser.fulfilled]: (state, action) => {
      state.state = 'idle';
      state.select = action.payload;
      console.log("response", action.payload);
      const decoded = jwt_decode(action.payload.token);
      console.log(decoded)
      return action.payload;

    },
    [loginUser.rejected]: (state, action) => {
      state.state = 'error';
      state.error = action.payload;
       console.log("action.payload",action.payload)
      return action.payload;
    },
    [loginUser.pending]: (state, action) => {
      state.state = 'loading';

    },
    
  },
});


export default loginSlice.reducer;

