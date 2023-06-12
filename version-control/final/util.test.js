const { reverseString, isAdultAge } = require('../start/util');

describe('reverseString', () => {
  test('reverses string', () => {
    const string = 'abcd';
    const result = reverseString(string);

    expect(result).toBe('dcba');
  });
});

describe('isAdultAge', () => {
  test('returns true if passed age is 18', () => {
    const age = 18;
    const result = isAdultAge(age);

    expect(result).toBe(true);
  });
});
