import { createSlice } from '@reduxjs/toolkit';
import { login } from '../actions/users.actions';

const initialState = {
  accounts: [],
};

const userAccountsSlice = createSlice({
  name: 'userAccounts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.accounts = action.payload.userAccounts;
    });
  },
});

export const userAccountsReducer = userAccountsSlice.reducer;
