import { useTranslation } from 'react-i18next';
import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getUserLanguage } from 'common/helpers';
import {
  UserInterfaceSettingsContext,
  DispatchUserInterfaceSettingsContext
} from 'web/js/context';
import { Landing } from 'web/js/page/landing';
import { Music } from 'web/js/page/music';
import { TalkToMeInKorean } from 'web/js/page/ttmik';

import './style.scss';

export function Application() {
  const { i18n } = useTranslation();
  const userInterfaceSettings = useContext(UserInterfaceSettingsContext);
  const dispatchUserInterfaceSettings = useContext(DispatchUserInterfaceSettingsContext);

  useEffect(() => {
    dispatchUserInterfaceSettings({
      type: 'SET',
      data: {
        language: getUserLanguage(null, navigator)
      }
    });
  }, []);

  useEffect(() => {
    if (userInterfaceSettings.language && i18n.language !== userInterfaceSettings.language) {
      i18n.changeLanguage(userInterfaceSettings.language);
      document.querySelector('html').setAttribute('lang', userInterfaceSettings.language);
    }
  }, [ userInterfaceSettings, i18n ]);

  useEffect(() => {
    const onLanguageChange = () => {
      dispatchUserInterfaceSettings({
        type: 'SET',
        data: {
          language: getUserLanguage(null, navigator)
        }
      });
    };

    window.addEventListener('languagechange', onLanguageChange);
    return () => {
      window.removeEventListener('languagechange', onLanguageChange);
    };
  }, [ dispatchUserInterfaceSettings ]);

  return (
    <BrowserRouter>
      <div styleName='root'>
        <Switch>
          <Route path='/music' component={Music} />
          <Route path='/ttmik' component={TalkToMeInKorean} />
          <Route component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
