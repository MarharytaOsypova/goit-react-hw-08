import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



 export const authApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

 export const setAuthHeader = (token) => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const registerThunk = createAsyncThunk("auth/register", async (credetials, thunkApi) => {
    try {
        const { data } = await authApi.post("users/signup", credetials)
         setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
});

export const loginThunk = createAsyncThunk("auth/login", async (credetials, thunkApi) => {
    try {
        const { data } = await authApi.post("users/login", credetials)
         setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
});

export const logoutThunk = createAsyncThunk("auth/logout", async (_, thunkApi) => {
   
    try {
        const { data } = await authApi.post("users/logout");
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
});

export const refreshUserThunk = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
      if (!savedToken) {
    return thunkApi.rejectWithValue("No token available"); 
    }
     setAuthHeader(savedToken);
    try {
        const { data } = await authApi.get("users/current");
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})