import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contactsList: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.contactsList = [...state.contactsList, action.payload];
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
