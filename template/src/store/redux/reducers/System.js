import SystemHelper from 'helpers/SystemHelper.js';
import { SET_LANGUAGE } from 'store/redux/action-types/System';

const { GetLocalSystemConfig } = SystemHelper;

const initialState = GetLocalSystemConfig();

export default function System(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: payload?.language ?? 'tr',
      };
    default:
      return state;
  }
}
