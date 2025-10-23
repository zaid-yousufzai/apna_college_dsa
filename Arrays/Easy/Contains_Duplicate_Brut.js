// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

let a = [1, 2, 3, 1];

function hasDuplicateBruteForce(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        return true; // found duplicate
      }
    }
  }
  return false; // no duplicates found
}

let x = hasDuplicateBruteForce(a);
console.log("Brute Force:", x);

// ⏱ Time Complexity

// Two nested loops → O(n²)

// 💾 Space Complexity

// Only a few variables → O(1)
