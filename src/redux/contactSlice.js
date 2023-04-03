import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {items: [], isLoading: false, error: null},
  extraReducers: (builder) => {
    builder
    /* Get Contacts */
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })

      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    /* Add Contact */
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })

      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    /* Delete Contact */
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        const filtered = state.items.filter(item => item.id !== action.payload.id);
        state.items = filtered;
      })

      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addDefaultCase((state, action) => {})
  },
})

export const contactReducer = contactSlice.reducer;