// Maximum and minimum of an array using minimum number of comparisons
// Last Updated : 23 Jul, 2025
// Given an array, the task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

// Examples:

// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//         Maximum element is: 9

let a = [22, 14, 8, 17, 35, 3];
function findx(a) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < a.length; i++) {
    if (min > a[i]) {
      min = a[i];
    }
    if (max < a[i]) {
      max = a[i];
    }
  }
  return [min, max];
}
let x = findx(a);
console.log(x);

// 👉 Time Complexity = O(n)
// 👉 Space Complexity = O(1)
