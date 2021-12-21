import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '..';

export const selectUserById = (uuid: string) =>
  createSelector(
    (state: RootState) => state.user.results,
    results => results.filter(user => user.login?.uuid === uuid)[0],
  );
