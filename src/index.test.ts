import { numbersToWords } from './index';
import { LANGUAGES } from './consts';

test('converts numbers to english by default', () => {
  expect(numbersToWords(1536)).toBe(
    'one thousand, five hundred and thirty-six'
  );
  expect(numbersToWords(9121)).toBe(
    'nine thousand, one hundred and twenty-one'
  );
  expect(numbersToWords(120005)).toBe(
    'one hundred and twenty thousand and five'
  );
});

test('it works with a language flag t00', () => {
  expect(numbersToWords(1536, LANGUAGES.EN)).toBe(
    'one thousand, five hundred and thirty-six'
  );
});

test('throw exception for unsupported language', () => {
  expect(() => numbersToWords(1536, 'TR')).toThrow(
    `does not support language TR`
  );
});
