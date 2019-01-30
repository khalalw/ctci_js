// Given two strings, write a method to decide if one is a permutation of the other.

// To be a permutation, they both have to have the same letters and be the same length

// O(n log n + m log m)
// n is str1, m is str2

function checkPerm(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // if strings are the same length, sort them with quick sort
  str1.sort();
  str2.sort();

  // compare values for each string. If all letters check out, return true
  return str1.every((value, index) => value === str2[index]);
}
