// Chocolate Distribution Problem
// Last Updated : 23 Jul, 2025
// Given an array arr[] of n integers where arr[i] represents the number of chocolates in ith packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that:

// Each student gets exactly one packet.
// The difference between the maximum and minimum number of chocolates in the packets given to the students is minimized.
// Examples:

// Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 3
// Output: 2
// Explanation: If we distribute chocolate packets {3, 2, 4}, we will get the minimum difference, that is 2.

// Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 5
// Output: 7
// Explanation: If we distribute chocolate packets {3, 2, 4, 9, 7}, we will get the minimum difference, that is 9 - 2 = 7.

function chocolateOptimal(arr, m) {
  if (m === 0 || m > arr.length) return 0;

  // Step 1: Sort array (efficient O(n log n))
  arr.sort((a, b) => a - b);

  let minDiff = Number.MAX_VALUE;

  // Step 2: Find minimum difference between max and min in any m-sized window
  for (let i = 0; i + m - 1 < arr.length; i++) {
    let diff = arr[i + m - 1] - arr[i];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

// Example test
let arr2 = [7, 3, 2, 4, 9, 12, 56];
console.log("Optimal (m=3):", chocolateOptimal([...arr2], 3)); // 2
console.log("Optimal (m=5):", chocolateOptimal([...arr2], 5)); // 7

// ⏱ Time Complexity

// Sorting: O(n log n)

// Window scanning: O(n)
// 👉 Total = O(n log n)

// 💾 Space Complexity

// Sort done in-place → O(1)
