import {Info, Result} from './interfaces';
import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from './actions';

const initialState = {
  loading: false,
  nextPage: 1,
  results: [] as Result[],
  info: {} as Info,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clear: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, {payload}) => {
      state.nextPage += 1;
      state.results = state.results.concat(payload.results);
      state.info = payload.info;
      state.loading = false;
    });
    builder.addCase(getUsers.rejected, state => {
      state.loading = false;
    });
  },
});

export const {clear} = user.actions;
export default user.reducer;
