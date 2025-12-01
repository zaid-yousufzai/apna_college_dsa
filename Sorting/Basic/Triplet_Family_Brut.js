function sum(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] === arr[k]) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(sum([1, 2, 3, 4, 5])); // true
console.log(sum([3, 4, 5])); // false

// Time : O(n³)
// Space : O(1)
