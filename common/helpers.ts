export enum Language {
  en = 'en',
  ko = 'ko',
  fr = 'fr',
  es = 'es',
}

export const getUserLanguage = (navigator = null) => {
  let result = null;

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
	return getUserLanguage(navigator);
};
