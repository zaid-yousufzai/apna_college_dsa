// Pair Sum in a Sorted and Rotated Array
// Given an array arr[] of size n, which is sorted and then rotated around an unknown pivot, the task is to check whether there exists a pair of elements in the array whose sum is equal to a given target value.

// Examples :

// Input: arr[] = [11, 15, 6, 8, 9, 10], target = 16
// Output: true
// Explanation: There is a pair (6, 10) with sum 16.

// Input: arr[] = [11, 11, 15, 26, 38, 9, 10], target = 35
// Output: true
// Explanation: There is a pair (26, 9) with sum 35.

// Input: arr[] = [9, 10, 10, 11, 15, 26, 38], target = 45
// Output: false
// Explanation: There is no pair with sum 45.

function pairSumOptimal(arr, target) {
  const n = arr.length;
  let pivot = -1;

  // Step 1: Find pivot (index of smallest element)
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      pivot = i + 1;
      break;
    }
  }

  if (pivot === -1) pivot = 0; // if array not rotated

  // Step 2: Set two pointers
  let left = pivot; // smallest element
  let right = (pivot - 1 + n) % n; // largest element

  // Step 3: Two-pointer traversal
  while (left !== right) {
    let sum = arr[left] + arr[right];

    if (sum === target) return true;

    if (sum < target) left = (left + 1) % n; // move clockwise
    else right = (right - 1 + n) % n; // move counter-clockwise
  }

  return false;
}

// ✅ Test Cases
console.log(pairSumOptimal([11, 15, 6, 8, 9, 10], 16)); // true
console.log(pairSumOptimal([11, 11, 15, 26, 38, 9, 10], 35)); // true
console.log(pairSumOptimal([9, 10, 10, 11, 15, 26, 38], 45)); // false

// ⏱️ Time Complexity → O(n)

// Each element is visited at most once by either pointer.

// 💾 Space Complexity → O(1)

// No extra space used.
