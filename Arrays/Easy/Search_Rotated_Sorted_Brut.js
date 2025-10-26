//  Search in Rotated Sorted Array

let nums = [4, 5, 6, 7, 0, 1, 2];

function searchBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log("Brute Force (target=0):", searchBruteForce(nums, 0)); // 4
console.log("Brute Force (target=3):", searchBruteForce(nums, 3)); // -1

// ⏱ Time Complexity

// Loop through all elements → O(n)

// 💾 Space Complexity

// Only a few variables → O(1)
