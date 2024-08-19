export const selectCurrentAccountId = (state) => state.currentAccount.id;
export const selectCurrentAccountBalance = (state) =>
  state.currentAccount.balance;
export const selectCurrentAccountCurrency = (state) =>
  state.currentAccount.currency;
export const selectCurrentAccountTransactions = (state) =>
  state.currentAccount.transactions;
