let a = [11, 7, 1, 13, 21, 3, 7, 3],
  b = [11, 3, 7, 1, 7];

function arraySubset(a, b) {
  for (let i = 0; i < b.length; i++) {
    let found = false;
    for (let j = 0; j < a.length; j++) {
      if (b[i] === a[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      return false;
    }
  }

  return true;
}
console.log(arraySubset(a, b)); // true

// | Approach      | Time Complexity | Space Complexity |
// | ------------- | --------------- | ---------------- |
// | Brute Force   | O(n × m)        | O(1)             |


