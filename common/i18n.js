import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from 'common/i18n/fr/translation.json';

i18n
.use(initReactI18next)
.init({
  preload: ['fr', 'ko'],
  lng: 'en',
  initImmediate: false,
  keySeparator: '___',
  returnEmptyString: false,
  resources: {
    fr: {
      translation: fr
    }
  }
});

export default i18n;
