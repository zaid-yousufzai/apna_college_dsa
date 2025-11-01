// Pair Sum in a Sorted and Rotated Array
// Given an array arr[] of size n, which is sorted and then rotated around an unknown pivot, the task is to check whether there exists a pair of elements in the array whose sum is equal to a given target value.

// Examples :

// Input: arr[] = [11, 15, 6, 8, 9, 10], target = 16
// Output: true
// Explanation: There is a pair (6, 10) with sum 16.

// Input: arr[] = [11, 11, 15, 26, 38, 9, 10], target = 35
// Output: true
// Explanation: There is a pair (26, 9) with sum 35.

// Input: arr[] = [9, 10, 10, 11, 15, 26, 38], target = 45
// Output: false
// Explanation: There is no pair with sum 45.

function pairSumBrute(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(pairSumBrute([11, 15, 6, 8, 9, 10], 16)); // true

// ⏱️ Time Complexity → O(n²)

// Because you check every pair.

// 💾 Space Complexity → O(1)

// No extra storage used.
