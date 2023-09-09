import React from 'react';
import { actions, dispatch, selectors } from 'store/redux';
import { useTranslation } from 'react-i18next';
import reactLogo from 'assets/images/react.svg';
import { useSelector } from 'react-redux';

const { system: {
  SetLanguageAction,
} } = actions;
const {
  system: {
    SystemLanguageSelector,
  },
} = selectors;
const Main = () => {
  const { t } = useTranslation();
  const currentLang = useSelector(SystemLanguageSelector);

  const toggleLanguage = () => {
    if (currentLang === 'tr') {
      dispatch(SetLanguageAction('en'));
    } else {
      dispatch(SetLanguageAction('tr'));
    }
  };

  const navigateDocs = () => {
    window.open('https://www.npmjs.com/package/cra-template-all-in-one', '_blank');
  };
  return (
    <>
      <div className="language" onClick={toggleLanguage}>
        {currentLang === 'tr' ? 'TR' : 'EN'}
      </div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t('welcome_all_in_one_template')}</h1>
      <p className="read-the-docs" onClick={navigateDocs}>
        {t('click_for_more_info')}
      </p>
    </>
  );
};

export default Main;
