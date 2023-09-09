import { SET_LANGUAGE } from 'store/redux/action-types/System';

const SetLanguageAction = (language) => ({
  type: SET_LANGUAGE,
  payload: { language },
});

export { SetLanguageAction };
