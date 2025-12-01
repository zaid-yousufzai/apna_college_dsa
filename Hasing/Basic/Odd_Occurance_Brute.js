function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count % 2 !== 0) return arr[i];
  }
}

console.log(findOdd([1, 2, 3, 2, 3, 1, 3]));

// ⏳ Time Complexity: O(n²)

// Nested loops.

// 📦 Space Complexity: O(1)

// No extra space.
