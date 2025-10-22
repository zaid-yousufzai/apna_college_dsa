// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

let a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubarrayKadane(a) {
  let maxSum = a[0]; // this is a[0] not 0 because this variable should contains max sum in case of all -ve numbers
  let currentSum = 0;

  for (let i = 0; i < a.length; i++) {
    currentSum += a[i];

    if (currentSum > maxSum) maxSum = currentSum;

    if (currentSum < 0) currentSum = 0;
  }

  return maxSum;
}

let result2 = maxSubarrayKadane(a);
console.log("Kadane’s Algorithm -> Max Sum:", result2);

// Optimal Approach (Kadane’s Algorithm)

// Instead of checking every subarray,

// Keep track of the current running sum.

// If the running sum ever drops below 0, reset it to 0 (because it won’t help in making a bigger sum later).

// Keep track of the maximum sum found so far.

// ⏱ Time Complexity

// Single pass → O(n)

// 💾 Space Complexity

// Constant → O(1)
