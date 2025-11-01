// 152. Maximum Product Subarray

// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Note that the product of an array with a single element is the value of that element.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

function maxProductBrute(nums) {
  let maxProd = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = i; j < nums.length; j++) {
      prod *= nums[j];
      maxProd = Math.max(maxProd, prod);
    }
  }

  return maxProd;
}

console.log(maxProductBrute([2, 3, -2, 4])); // 6
console.log(maxProductBrute([-2, 0, -1])); // 0

// ⏱️ Time Complexity

// Outer loop → O(n)

// Inner loop → O(n)
// ➡️ Total = O(n²)

// 💾 Space Complexity

// Only uses a few variables → O(1)
