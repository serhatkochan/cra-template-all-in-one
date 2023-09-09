import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import SystemHelper from 'helpers/SystemHelper';

import { trMessages } from './tr';
import { enMessages } from './en';

const language = SystemHelper.GetLanguage();

const resources = {
  en: { translations: { ...enMessages } },
  tr: { translations: { ...trMessages } },
};
i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: language,
    fallbackLng: language,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
    debug: false,
  });

export default i18next;
