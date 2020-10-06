/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const domain = (state) => state;

export const selectData = () => createSelector(
  domain,
  (substate) => substate.data,
);
