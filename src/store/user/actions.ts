import {createAsyncThunk} from '@reduxjs/toolkit';
import {FormData, UserProps} from './interfaces';
import {api} from '../../services/api';
import {AxiosResponse} from 'axios';

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async ({page, gender, nat}: FormData) => {
    const {data}: AxiosResponse<UserProps> = await api.get('/api', {
      params: {
        page,
        gender,
        nat,
        results: 50,
      },
    });

    return data;
  },
);
