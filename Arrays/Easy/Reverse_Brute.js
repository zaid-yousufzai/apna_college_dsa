// Maximum and minimum of an array using minimum number of comparisons
// Last Updated : 23 Jul, 2025
// Given an array, the task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//         Maximum element is: 9

let a = [22, 14, 8, 17, 35, 3];

function reversex(a) {
  let rev = [];
  for (let i = a.length - 1; i >= 0; i--) {
    rev.push(a[i]);
  }
  return rev;
}

let x = reversex(a);
console.log(x);

// ⏱ Time Complexity

// Loop runs n times → O(n)

// 💾 Space Complexity

// Extra array of size n → O(n)
