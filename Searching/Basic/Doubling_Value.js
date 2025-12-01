function doub(arr, B) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === B) {
      B *= 2;
    }
  }
  return B;
}

let a = [1, 2, 3, 4, 8];
let b = 2;

console.log(doub(a, b)); // 16

// ⏱ Complexity

// Time: O(n)

// Space: O(1)
