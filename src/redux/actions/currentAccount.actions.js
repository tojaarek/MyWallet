import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3030';

const setHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const deleteTransaction = createAsyncThunk(
  'TRANSACTION/DELETE',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    try {
      setHeader(token);
      const { data } = await axios.delete(`/transactions/${id}`);
      return data;
    } catch (error) {
      const httpCode = error.response.status;
      const httpMessage = error.response.data.message;
      if (httpCode === 409 || httpCode === 400) {
        toast.error(`${httpMessage}`);
      } else {
        toast.error('Something went wrong...');
      }
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
