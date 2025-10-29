// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4;

function largest(nums, k) {
  let result;
  for (let i = 0; i < k; i++) {
    // find the maximum value
    let max = Math.max(...nums);
    result = max;

    // remove one occurrence of that max from array
    let index = nums.indexOf(max);
    nums.splice(index, 1);
  }
  return result;
}

console.log(largest(nums, k));

// ⏱️ Complexity

// Time Complexity: O(n × k)
// (because each Math.max() is O(n), and we do it k times)

// Space Complexity: O(1) (we modify the array in place)

// If k is small, the second approach is okay.

// If k is large (close to n), the first (sorting) approach is actually faster.

// The optimal heap method beats both for large arrays and any k.
