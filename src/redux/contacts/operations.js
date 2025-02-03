import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const contactsApi = axios.create({
  baseURL: "https://6793b73a5eae7e5c4d8fa815.mockapi.io",
});


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await contactsApi.get('/contacts')
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await contactsApi.post('/contacts',contact )
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});
   
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
         await contactsApi.delete(`/contacts/${id}`)
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});