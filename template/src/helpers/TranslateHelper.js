import i18next from 'i18next';

const Translate = (key) => {
  if (!key) return '';
  return i18next.t(key);
};

const FormatTranslate = (object) => {
  const { key, format } = object;
  return i18next.t(key, { ...format });
};

const ChangeLanguage = (key) => {
  i18next.changeLanguage(key);
};

const TranslateHelper = {
  Translate,
  FormatTranslate,
  ChangeLanguage,
};

export default TranslateHelper;
