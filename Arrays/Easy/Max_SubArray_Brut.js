// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

let a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubarrayBruteForce(a) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let subarray = [];

  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = i; j < a.length; j++) {
      sum += a[j];
      if (sum > maxSum) {
        maxSum = sum;
        subarray = a.slice(i, j + 1);
      }
    }
  }

  return [maxSum, subarray];
}

let result1 = maxSubarrayBruteForce(a);
console.log("Brute Force -> Max Sum:", result1[0], ", Subarray:", result1[1]);

// ⏱ Time Complexity

// Two nested loops → O(n²)

// 💾 Space Complexity

// Only a few extra variables → O(1) (excluding the subarray copy)
