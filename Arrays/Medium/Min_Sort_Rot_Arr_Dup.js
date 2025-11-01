// ⚡ Optimal Approach (Binary Search — O(log n))
// 153. Find Minimum in Rotated Sorted Array
// when there are duplicates

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
    else if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      end--;
    }
  }

  // Start and end will meet at the smallest element.
  return nums[start];
}

console.log(findMin([3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 1, 2, 3])); // 1

// ⏱️ Time Complexity → O(log n)

// Binary search divides the array in half each time.

// 💾 Space Complexity → O(1)

// No extra data structures.
