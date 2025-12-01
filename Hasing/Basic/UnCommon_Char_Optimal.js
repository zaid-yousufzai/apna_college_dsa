function uniqueOptimal(s1, s2) {
  let set1 = new Set(s1);
  let set2 = new Set(s2);
  let res = [];

  // chars in s1 but not s2
  for (let ch of set1) {
    if (!set2.has(ch)) res.push(ch);
  }

  // chars in s2 but not s1
  for (let ch of set2) {
    if (!set1.has(ch)) res.push(ch);
  }

  return res.sort().join("");
}

console.log(uniqueOptimal("geeksforgeeks", "geeksquiz"));

// Time Complexity
// O(n) + O(m) + O(k log k)

// (k = number of unique characters to sort)

// Space Complexity
// O(n + m)
