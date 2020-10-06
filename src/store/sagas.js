import {
  call,
  take,
  all,
  put,
} from 'redux-saga/effects';
import { request } from '../commons/utils';
import * as url from '../commons/constants';
import * as constants from './constants';
import * as actions from './actions';

function* getData() {
  const result = yield call(request, url.MAIN_URL, 'GET');
  if (result !== 'invalid') {
    yield put(actions.setData(result));
  } else {
    console.log('HATA');
  }
}

function* getDataWatcher() {
  while (true) {
    const action = yield take(constants.GET_DATA);
    yield call(getData, action.data);
  }
}

export default function* rootSaga() {
  yield all([
    getDataWatcher(),
  ]);
}
