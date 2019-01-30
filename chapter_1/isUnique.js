// Implement an algorithm to determine if a string has all unique characters.What if you cannot use additional data structures ?

// 1. Sort string
// 2. Check adjacent places for letters to find duplicates

// Runtime is O(n log n)

function isUnique(str) {
  // Sort with quicksort
  str.sort();

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
    return false;
  }
}
