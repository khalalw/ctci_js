// Given a string, write a function to check if it is a permutation of a palin­ drome.
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// 1. Go through characters in string and check for odd numbers of characters.
// 2. If there is more than one character with an odd number of chars, no palindrome

// O(n)

function isPalindromePermSet(str) {
  let charObj = {};
  let oddCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;

    let char = str[i];

    if (!charObj[char]) {
      charObj[char] = 1;
    } else {
      charObj[char]++;
    }
  }

  Object.keys(charObj).forEach(element => {
    if (charObj[element] % 2 !== 0) {
      oddCount++;
    }
  });

  return oddCount <= 1;
}
