import { call, take } from 'redux-saga/effects';
import { SET_LANGUAGE } from 'store/redux/action-types/System';

import SystemHelper from 'helpers/SystemHelper.js';
import TranslateHelper from 'helpers/TranslateHelper.js';

const { UpdateSystemConfig } = SystemHelper;

function* System() {
  while (true) {
    const action = yield take([SET_LANGUAGE]);
    const { type, payload } = action;
    switch (type) {
      case SET_LANGUAGE:
        yield call(SetLanguage, payload?.language);
        break;
      default:
        break;
    }
  }
}

function* SetLanguage(language) {
  try {
    yield call(UpdateSystemConfig, 'language', language);
    yield call(TranslateHelper.ChangeLanguage, language);
  } catch (e) {
    console.warn('SAGA/SetLanguage', e);
  }
}

export default System;
