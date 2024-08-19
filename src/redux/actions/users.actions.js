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

export const register = createAsyncThunk(
  'USERS/REGISTER',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
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

export const login = createAsyncThunk(
  'AUTH/LOGIN',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      return data;
    } catch (error) {
      const httpCode = error.response.status;
      const httpMessage = error.response.data.message;
      if (httpCode === 401 || httpCode === 400) {
        toast.error(`${httpMessage}`);
      } else {
        toast.error('Something went wrong...');
      }
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const refresh = createAsyncThunk('AUTH/REFRESH', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.users.token;

  if (token === null) {
    return thunkAPI.rejectWithValue('Unable to refresh user');
  }

  try {
    setHeader(token);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
