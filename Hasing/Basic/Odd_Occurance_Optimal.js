function findOdd(arr) {
  let xor = 0;

  for (let num of arr) {
    xor ^= num;
  }

  return xor;
}

console.log(findOdd([1, 2, 3, 2, 3, 1, 3]));
console.log(findOdd([5, 7, 2, 7, 5, 2, 5]));

// ⏳ Time Complexity: O(n)

// Single pass.

// 📦 Space Complexity: O(1)

// Only one variable.
