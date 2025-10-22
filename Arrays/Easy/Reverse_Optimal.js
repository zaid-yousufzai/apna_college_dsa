// Maximum and minimum of an array using minimum number of comparisons
// Last Updated : 23 Jul, 2025
// Given an array, the task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//         Maximum element is: 9

let a = [22, 14, 8, 17, 35, 3];

function reversex(a) {
  let start = 0;
  let end = a.length - 1;
  while (start < end) {
    let temp = a[start];
    a[start] = a[end];
    a[end] = temp;
    start++;
    end--;
  }

  return a;
}

let x = reversex(a);
console.log(x);

// ⏱ Time Complexity

// Each element is swapped once → O(n)

// 💾 Space Complexity

// No extra array needed → O(1)
