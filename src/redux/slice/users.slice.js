import { createSlice } from '@reduxjs/toolkit';
import { register, login } from '../actions/users.actions';

const initialState = {
  id: null,
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRegistered: false,
  isRefreshing: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state) => {
        state.isRegistered = true;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { id, name, email, token } = action.payload.user;
        state.id = id;
        state.name = name;
        state.email = email;
        state.token = token;
        state.isLoggedIn = true;
        state.isRegistered = true;
        state.isLoading = false;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const usersReducer = usersSlice.reducer;
