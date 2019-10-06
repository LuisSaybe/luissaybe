import { useTranslation } from 'react-i18next';
import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getUserLanguage } from 'common/helpers';

import {
  UserInterfaceSettingsContext,
  DispatchUserInterfaceSettingsContext
} from 'web/js/context';

import { NaturalSpinner } from 'web/js/hook/interface/natural-spinner';

import { Landing } from 'web/js/page/landing';

import './style.scss';

export function Application() {
  const { i18n } = useTranslation();
  const userInterfaceSettings = useContext(UserInterfaceSettingsContext);
  const dispatchUserInterfaceSettings = useContext(DispatchUserInterfaceSettingsContext);

  const loading =
    !i18n.language ||
    userInterfaceSettings.language === null;

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

  let content;

  if (loading) {
    content = <NaturalSpinner styleName='spinner' />;
  } else {
    content = (
      <>
        <Switch>
          <Route path='/' component={Landing} />
        </Switch>
      </>
    );
  }

  return (
    <BrowserRouter>
      <div styleName='root'>
        {content}
      </div>
    </BrowserRouter>
  );
}
