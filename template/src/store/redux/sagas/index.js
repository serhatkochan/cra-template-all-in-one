import { all, fork } from 'redux-saga/effects';

import System from './System';

export default function* RootSaga() {
  yield all([
    fork(System),
  ]);
}
