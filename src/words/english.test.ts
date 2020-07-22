import { English } from './english';

const english = new English();

test('converts basic numbers', () => {
  expect(english.convert(1)).toBe('one');
  expect(english.convert(6)).toBe('six');
  expect(english.convert(11)).toBe('eleven');
  expect(english.convert(10)).toBe('ten');
  expect(english.convert(15)).toBe('fifteen');
  expect(english.convert(19)).toBe('nineteen');
});

test('converts tens', () => {
  expect(english.convert(20)).toBe('twenty');
  expect(english.convert(21)).toBe('twenty-one');
  expect(english.convert(22)).toBe('twenty-two');
  expect(english.convert(33)).toBe('thirty-three');
  expect(english.convert(59)).toBe('fifty-nine');
  expect(english.convert(67)).toBe('sixty-seven');
  expect(english.convert(99)).toBe('ninety-nine');
});

test('converts hundreds', () => {
  expect(english.convert(536)).toBe('five hundred and thirty-six');
  expect(english.convert(147)).toBe('one hundred and forty-seven');
  expect(english.convert(605)).toBe('six hundred and five');
});

test('converts thousands', () => {
  expect(english.convert(1536)).toBe(
    'one thousand, five hundred and thirty-six'
  );
  expect(english.convert(9121)).toBe(
    'nine thousand, one hundred and twenty-one'
  );
  expect(english.convert(10022)).toBe('ten thousand and twenty-two');
  expect(english.convert(4567)).toBe(
    'four thousand, five hundred and sixty-seven'
  );
  expect(english.convert(98745)).toBe(
    'ninety-eight thousand, seven hundred and forty-five'
  );
  expect(english.convert(120005)).toBe(
    'one hundred and twenty thousand and five'
  );
  expect(english.convert(5000)).toBe('five thousand');
  expect(english.convert(34230)).toBe(
    'thirty-four thousand, two hundred and thirty'
  );
  expect(english.convert(873120)).toBe(
    'eight hundred and seventy-three thousand, one hundred and twenty'
  );
  expect(english.convert(10043)).toBe('ten thousand and forty-three');
  expect(english.convert(67000)).toBe('sixty-seven thousand');
});

test('converts large numbers', () => {
  expect(english.convert(66723107008)).toBe(
    'sixty-six billion, seven hundred and twenty-three million, ' +
      'one hundred and seven thousand and eight'
  );
  expect(english.convert(7340200)).toBe(
    'seven million, three hundred and forty thousand, two hundred'
  );
  expect(english.convert(4567090)).toBe(
    'four million, five hundred and sixty-seven thousand and ninety'
  );

  expect(english.convert(92000031)).toBe('ninety-two million and thirty-one');

  expect(english.convert(1000010000023)).toBe(
    'one trillion, ten million and twenty-three'
  );
});
