import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from 'common/i18n/fr/translation.json';
import ko from 'common/i18n/ko/translation.json';
import es from 'common/i18n/es/translation.json';

i18n
.use(initReactI18next)
.init({
  preload: ['fr', 'ko', 'es'],
  lng: 'en',
  initImmediate: false,
  keySeparator: '___',
  returnEmptyString: false,
  resources: {
    fr: {
      translation: fr
    },
    ko: {
      translation: ko
    },
    es: {
      translation: es
    }
  }
});

export default i18n;
