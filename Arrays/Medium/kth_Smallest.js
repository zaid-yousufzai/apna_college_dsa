// Given an integer array arr[] and an integer k, your task is to find and return the kth smallest element in the given array.

// Examples :

// Input: arr[] = [10, 5, 4, 3, 48, 6, 2, 33, 53, 10], k = 4
// Output: 5
// Explanation: 4th smallest element in the given array is 5.
// Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
// Output: 7
// Explanation: 3rd smallest element in the given array is 7.

function kthSmallestBrute(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}

console.log(kthSmallestBrute([7, 10, 4, 3, 20, 15], 3)); // 7
console.log(kthSmallestBrute([10, 5, 4, 3, 48, 6, 2, 33, 53, 10], 4)); // 5

// ⏱️ Time Complexity: O(n log n)

// (Sorting dominates)

// 💾 Space Complexity: O(1) (if in-place sort)
