function reverseString(stringToBeReversed) {
  return stringToBeReversed.split('').reverse().join('');
}

function isAdultAge(age) {
  if (age >= 18) {
    return true;
  }

  return false;
}

module.exports = {
  reverseString,
  isAdultAge,
};
