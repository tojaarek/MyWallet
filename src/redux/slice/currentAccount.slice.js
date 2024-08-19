import { createSlice } from '@reduxjs/toolkit';
import { login } from '../actions/users.actions';
import { deleteTransaction } from '../actions/currentAccount.actions';

const initialState = {
  id: null,
  balance: null,
  currency: null,
  transactions: [],
};

const currentAccountSlice = createSlice({
  name: 'currentAccount',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { id, balance, currency, transactions } =
        action.payload.mainAccount;
      state.id = id;
      state.balance = balance;
      state.currency = currency;
      state.transactions = transactions;
    });
    builder.addCase(deleteTransaction.fulfilled, (state, action) => {
      const transactionId = action.meta.arg;
      state.balance = action.payload.account.accountBalance;
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== transactionId,
      );
    });
  },
});

export const currentAccountReducer = currentAccountSlice.reducer;
