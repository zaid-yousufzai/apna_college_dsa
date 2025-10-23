// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

let a = [1, 2, 3, 1];

function hasDuplicateOptimal(a) {
  let seen = new Set();

  for (let num of a) {
    if (seen.has(num)) {
      return true; // duplicate found
    }
    seen.add(num);
  }

  return false; // all distinct
}

let y = hasDuplicateOptimal(a);
console.log("Optimal:", y);

// ⏱ Time Complexity

// Single loop → O(n)

// 💾 Space Complexity

// Extra Set to store elements → O(n)
