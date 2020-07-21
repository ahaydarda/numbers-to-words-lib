import { numbersToWords } from './index';

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

test('throw exception for unsupported language', () => {
  expect(() => numbersToWords(1536, 'TR')).toThrow(
    `does not support language TR`
  );
});
