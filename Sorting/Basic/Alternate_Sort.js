function alternate(arr) {
  arr.sort((a, b) => a - b);

  let i = 0;
  let j = arr.length - 1;
  let res = [];

  while (i < j) {
    res.push(arr[j]); // largest
    res.push(arr[i]); // smallest
    j--;
    i++;
  }

  // If odd length, add the middle element
  if (i === j) {
    res.push(arr[i]);
  }

  return res;
}

console.log(alternate([7, 1, 2, 3, 4, 5, 6]));
console.log(alternate([1, 6, 9, 4, 3, 7, 8, 2]));


// Time & Space Complexity
// Operation	Complexity
// Sorting	O(n log n)
// Two-pointer rearranging	O(n)
// Result array	O(n)

// ✔️ Total Time: O(n log n)
// ✔️ Space: O(n)