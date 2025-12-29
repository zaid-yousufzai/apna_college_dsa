function sortMatrix(mat) {
  let rows = mat.length;
  let cols = mat[0].length;

  let arr = [];

  // Step 1: Extract all values
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      arr.push(mat[i][j]);
    }
  }

  // Step 2: Sort the array
  arr.sort((a, b) => a - b);

  // Step 3: Put values back
  let idx = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      mat[i][j] = arr[idx++];
    }
  }

  return mat;
}
console.log(
  sortMatrix([
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50],
  ])
);

console.log(
  sortMatrix([
    [5, 2, 9, 1],
    [8, 3, 4, 7],
    [6, 0, 11, 10],
  ])
);

// ⏱ Time Complexity

// ✔️ Extract → O(M×N)
// ✔️ Sort → O((M×N) log(M×N))
// ✔️ Fill → O(M×N)

// ➡️ Total = O(MN log(MN))

// 📦 Space Complexity

// Storing all elements:

// ➡️ O(M×N)
