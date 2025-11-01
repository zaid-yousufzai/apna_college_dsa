// ⚡ Optimal Approach (Binary Search — O(log n))
// 153. Find Minimum in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:
function findMin(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // If mid element is greater than the rightmost element,
    // that means the smallest value is to the right of mid.
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    }
    // Otherwise, the smallest value is at mid or to the left.
    else {
      end = mid;
    }
  }

  // Start and end will meet at the smallest element.
  return nums[start];
}

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11

// ⏱️ Time Complexity → O(log n)

// Binary search divides the array in half each time.

// 💾 Space Complexity → O(1)

// No extra data structures.
