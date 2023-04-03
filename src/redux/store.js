import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactReducer } from './contactSlice';
import storage from 'redux-persist/lib/storage';
import { createAction } from "@reduxjs/toolkit";



export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  }
});

