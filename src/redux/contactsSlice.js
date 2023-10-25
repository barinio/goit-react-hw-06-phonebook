import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';

const contactsSlice = createSlice({
  name: 'contactsList',
  initialState: INITIAL_STATE.contacts,
  reducers: {
    addContact: (state, action) => [...state, action.payload],
    removeUser: (state, action) => state.filter(c => c.id !== action.payload),
  },
});
export const { addContact, removeUser } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
