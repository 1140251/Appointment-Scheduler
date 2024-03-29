import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, StaticProvider } from '@angular/core';
import { I18n } from '@ngx-translate/i18n-polyfill';
import * as moment from 'moment';

declare var navigator: any; // navigator.languages not available yet
declare const require;

export function getTranslationProviders(): Promise<StaticProvider[]> {

  // Make sure a locale exists
  ensureLocale();

  // Get the locale id from localStorage
  const locale = localStorage.getItem('locale');

  // return no providers if fail to get translation file for locale
  const noProviders: StaticProvider[] = [];

  // No locale or U.S. English: no translation providers
  if (!locale || locale === 'en-US') {
    return Promise.resolve(noProviders);
  }

  // use the require method provided by webpack
  // we use the webpack raw-loader to return the content as a string
  const translationFileContents = require(`raw-loader!./locale/messages.pt.xlf`);


  if (locale.startsWith('pt')) {
    return Promise.resolve([
      { provide: TRANSLATIONS, useValue: translationFileContents },
      { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
      { provide: LOCALE_ID, useValue: locale }
    ]);
  } else {
    return Promise.resolve(noProviders);
  }
}

declare var System: any;


/**
 * This sets the locale depending on the browser configuration.
 * The value is extracted from either `navigator.languages[0]`,
 * `navigator.language` or `navigator.userLanguage` and persisted to
 * localStorage, where all other parts of the application take it from.
 */
function ensureLocale() {
  if (!localStorage.getItem('locale')) {
    const locale = navigator.languages
      ? navigator.languages[0]
      : (navigator.language || navigator.userLanguage);
    localStorage.setItem('locale', locale);
    setMomentLocale(locale);
  } else {
    setMomentLocale(localStorage.getItem('locale'));
  }
}

/**
 * This sets the locale for all newly create moments globally.
 */
function setMomentLocale(locale: string) {
  moment.locale(locale);
}