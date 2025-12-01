// Two-pointer after sorting
function sum(arr) {
  arr.sort((a, b) => a - b);

  for (let k = arr.length - 1; k >= 2; k--) {
    let i = 0;
    let j = k - 1;

    while (i < j) {
      let s = arr[i] + arr[j];

      if (s === arr[k]) return true;
      else if (s < arr[k]) i++;
      else j--;
    }
  }
  return false;
}

console.log(sum([1, 2, 3, 4, 5])); // true
console.log(sum([3, 4, 5])); // false

// Time : O(n²)
// Space : O(1)
