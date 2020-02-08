class Language {
  static en = 'en';
  static ko = 'ko';
  static fr = 'fr';
}

export const getUserLanguage = (user = null, navigator = null) => {
  let result = null;

  if (user !== null  && user.lastLanguage !== null) {
    result = user.lastLanguage;
  }

  if (navigator !== null && result === null) {
    if (navigator.languages) {
      result = navigator.languages[0];
    }

    if (navigator.language) {
      result = navigator.language;
    }
  }

  if (result !== null) {
    return result;
  }

	return Language.en;
};

export const getNavigatorLanguage = (navigator = null) => {
	return getUserLanguage(null, navigator);
};
