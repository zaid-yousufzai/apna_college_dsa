// Pair Sum in a Sorted  Array
// Given an array arr[] of size n, which is sorted and then rotated around an unknown pivot, the task is to check whether there exists a pair of elements in the array whose sum is equal to a given target value.


function pairSumOptimal(arr, target) {
  let end = arr.length-1;
  let start = 0;

  while (start <= end) {
    let sum = arr[start] + arr[end];

    if (sum === target) {
      return true;
    }
    if (sum > target) {
      end--;
    }

    if (sum < target) {
      start++;
    }
  }

  return false;
}

// ✅ Test Cases
console.log(pairSumOptimal([ 6, 8, 9, 10,11,15], 16)); // true
console.log(pairSumOptimal([9, 10, 10, 11, 15, 26, 38], 45)); // false

// ⏱️ Time Complexity → O(n)

// Each element is visited at most once by either pointer.

// 💾 Space Complexity → O(1)

// No extra space used.
