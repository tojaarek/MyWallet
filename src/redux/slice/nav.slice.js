import { createSlice } from '@reduxjs/toolkit';
import { deleteTransaction } from '../actions/currentAccount.actions';

const initialState = {
  isHome: true,
  isStatistics: false,
  isExchange: false,
  isModalOpen: false,
  modalType: '',
  transactionToDelete: null,
  isLoading: false,
  isOptionsOpen: false,
};

const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setHome: (state) => {
      state.isHome = true;
      state.isStatistics = false;
      state.isExchange = false;
    },
    setStatistics: (state) => {
      state.isHome = false;
      state.isStatistics = true;
      state.isExchange = false;
    },
    setExchange: (state) => {
      state.isHome = false;
      state.isStatistics = false;
      state.isExchange = true;
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setTransactionToDelete: (state, action) => {
      state.transactionToDelete = action.payload;
    },
    setIsOptionsOpen: (state, action) => {
      state.isOptionsOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteTransaction.fulfilled, (state) => {
        state.transactionToDelete = null;
        state.isLoading = false;
        state.isModalOpen = false;
        state.modalType = '';
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const {
  setHome,
  setStatistics,
  setExchange,
  setModalType,
  setIsModalOpen,
  setTransactionToDelete,
  setIsOptionsOpen,
} = navSlice.actions;

export const navReducer = navSlice.reducer;
