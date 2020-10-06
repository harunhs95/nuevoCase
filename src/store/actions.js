import * as constants from './constants';

// GET DATA
export const getData = () => ({ type: constants.GET_DATA });
// DO LOGIN
export const setData = (data) => ({ type: constants.SET_DATA, data });
