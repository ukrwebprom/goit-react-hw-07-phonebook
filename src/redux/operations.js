import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
axios.defaults.baseURL = 'https://6429521bebb1476fcc46e108.mockapi.io/';

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const {data} = await axios('/contacts');
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }

    }
)

export const addContact = createAsyncThunk("contacts/addContact",
    async (data, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", data);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );