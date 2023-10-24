import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const INITIAL_STATE = {
  contactsList: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      const duplicateName = state.contactsList.find(
        contact => contact.name === action.payload.name
      );
      if (duplicateName) {
        toast.error(`${action.payload.name} is already in contacts.`);
        return state;
      }
      state.contactsList = [...state.contactsList, action.payload];
      toast.success(`${action.payload.name} add to contacts.`);
    },
    delCont(state, action) {
      state.contactsList = state.contactsList.filter(
        c => c.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addContact, delCont, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
