import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshUserThunk, registerThunk } from "./operations";

 
const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
}
    


const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {

         builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload.user
           state.token = action.payload.token
           
        })
      .addCase(loginThunk.fulfilled, (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload.user
            state.token = action.payload.token
      })
           .addCase(refreshUserThunk.pending, (state) => {
           state.isRefreshing = true;
})
            .addCase(logoutThunk.fulfilled, () => {
           return initialState
            })
            .addCase(refreshUserThunk.fulfilled, (state, action) => {
            state.isLoggedIn = true
            state.user.name = action.payload.name
            state.user.email = action.payload.email
            state.isRefreshing = false;
            
            })
            .addCase(refreshUserThunk.rejected, (state) => { 
            state.isRefreshing = false;
      });
    }
})


export const authReducer = authSlice.reducer;