function containsRange(A, B, arr) {
  for (let x = A; x <= B; x++) {
    let found = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        found = true;
        break;
      }
    }

    if (!found) return false;
  }

  return true;
}
console.log(containsRange(2, 5, [1, 4, 5, 2, 7, 8, 3])); // true
console.log(containsRange(2, 6, [1, 4, 5, 2, 7, 8, 3])); // false

// | Approach      | Time           | Space |
// | ------------- | -------------- | ----- |
// | Brute Force   | O((B−A+1) × n) | O(1)  |
