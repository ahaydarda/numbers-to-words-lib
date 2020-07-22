import converters from './converters';
import { LANGUAGES } from './consts';
import { ILanguage } from 'words/Ilanguage';

export interface INumbersToWordsFunc {
  (value: number, language?: string): string;
}

export const numbersToWords: INumbersToWordsFunc = (
  value: number,
  language: string = LANGUAGES.EN
) => {
  if (!converters.has(language.toLowerCase())) {
    throw Error(`does not support language ${language}`);
  }
  return (converters.get(language.toLowerCase()) as ILanguage).convert(value);
};
