function productExceptSelfOptimal(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  // Build left products directly into result
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Multiply with right products (computed on the fly)
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}

console.log(productExceptSelfOptimal([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelfOptimal([-1, 1, 0, -3, 3])); // [0,0,9,0,0]

// Time	O(n)
// Space	O(1) (excluding result array)
