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

function chocolateBruteForce(arr, m) {
  if (m === 0 || m > arr.length) return 0;

  // Step 1: Sort array
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  let minDiff = Number.MAX_VALUE;

  // Step 2: Check all possible groups of m packets
  for (let i = 0; i + m - 1 < arr.length; i++) {
    let diff = arr[i + m - 1] - arr[i];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

// Example test
let arr = [7, 3, 2, 4, 9, 12, 56];
console.log("Brute Force (m=3):", chocolateBruteForce([...arr], 3)); // 2
console.log("Brute Force (m=5):", chocolateBruteForce([...arr], 5)); // 7

// ⏱ Time Complexity

// Sorting: O(n²) (since you used bubble sort)

// Checking windows: O(n)
// 👉 Total = O(n²)

// 💾 Space Complexity

// In-place sorting → O(1)
