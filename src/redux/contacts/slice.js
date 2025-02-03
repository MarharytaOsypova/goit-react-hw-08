import {  createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from './operations';
import { logoutThunk } from './../auth/operations';
 

 

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
   
  extraReducers:(builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addContact.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
      state.error = null;
      state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
    
        .addCase(logoutThunk.fulfilled, (state) => {
        state.items = [];  
      });
  }

});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export default slice.reducer;