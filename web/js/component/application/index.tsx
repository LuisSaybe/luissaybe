import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getUserLanguage } from 'common/helpers';
import { Landing } from 'web/js/page/landing';
import { Music } from 'web/js/page/music';
import { TalkToMeInKorean } from 'web/js/page/ttmik';
import { useGoogleAnalytics } from 'web/js/hook/useGoogleAnalytics';
import { set } from 'web/js/redux/user-interface/action';
import { RootState } from 'web/js/redux/reducer';

import './style.scss';

export function Application() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.userInterface.language);
  useGoogleAnalytics();

  useEffect(() => {
    dispatch(set({
      language: getUserLanguage(navigator)
    }));
  }, []);

  useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
      document.querySelector('html').setAttribute('lang', language);
    }
  }, [ language, i18n ]);

  useEffect(() => {
    const onLanguageChange = () => {
      dispatch(set({
        language: getUserLanguage(navigator)
      }));
    };

    window.addEventListener('languagechange', onLanguageChange);
    return () => {
      window.removeEventListener('languagechange', onLanguageChange);
    };
  }, []);

  return (
    <div styleName='root'>
      <Switch>
        <Route path='/music' component={Music} />
        <Route path='/ttmik' component={TalkToMeInKorean} />
        <Route component={Landing} />
      </Switch>
    </div>
  );
}
