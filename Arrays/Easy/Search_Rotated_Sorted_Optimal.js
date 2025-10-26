//  Search in Rotated Sorted Array

let nums = [4, 5, 6, 7, 0, 1, 2];

function searchRotated(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Case 1: Found target
    if (nums[mid] === target) {
      return mid;
    }

    // Case 2: Left half is sorted
    if (nums[start] <= nums[mid]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1; // search left
      } else {
        start = mid + 1; // search right
      }
    }
    // Case 3: Right half is sorted
    else {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1; // search right
      } else {
        end = mid - 1; // search left
      }
    }
  }

  return -1; // target not found
}

console.log("Optimal (target=0):", searchRotated(nums, 0)); // 4
console.log("Optimal (target=3):", searchRotated(nums, 3)); // -1

// ⏱ Time Complexity

// Binary search halves the range each step → O(log n)

// 💾 Space Complexity

// Constant → O(1)
