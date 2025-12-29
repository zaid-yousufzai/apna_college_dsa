function countSortedRows(mat) {
  let count = 0;

  for (let row of mat) {
    let inc = true;
    let dec = true;

    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] >= row[i + 1]) inc = false;
      if (row[i] <= row[i + 1]) dec = false;
    }

    if (inc || dec) count++;
  }

  return count;
}

console.log(
  countSortedRows([
    [1, 2, 3],
    [6, 5, 4],
    [7, 9, 8],
  ])
); // 2
console.log(
  countSortedRows([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 3

// ⏱ Time Complexity

// O(N × M)

// 📦 Space Complexity

// Only a few variables (inc, dec).

// O(1)
