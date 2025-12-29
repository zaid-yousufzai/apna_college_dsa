function sumOfMatrix(N, M, Grid) {
  let sum = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      sum += Grid[i][j];
    }
  }
  return sum;
}
console.log(
  sumOfMatrix(2, 3, [
    [1, 0, 1],
    [-8, 9, -2],
  ])
); // 1
console.log(
  sumOfMatrix(3, 5, [
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [-1, -1, -1, -1, -1],
  ])
); // 0

// ⏱ Time Complexity
// O(N × M)

// 📦 Space Complexity
// O(1)
