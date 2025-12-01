function uniqueBrute(s1, s2) {
  let res = [];

  // chars in s1 but not in s2
  for (let i = 0; i < s1.length; i++) {
    let found = false;
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        found = true;
        break;
      }
    }
    if (!found) res.push(s1[i]);
  }

  // chars in s2 but not in s1
  for (let i = 0; i < s2.length; i++) {
    let found = false;
    for (let j = 0; j < s1.length; j++) {
      if (s2[i] === s1[j]) {
        found = true;
        break;
      }
    }
    if (!found) res.push(s2[i]);
  }

  // remove duplicates + sort
  res = [...new Set(res)].sort().join("");

  return res;
}

console.log(uniqueBrute("geeksforgeeks", "geeksquiz"));

// Time Complexity

// First loop: O(n1 × n2)

// Second loop: O(n2 × n1)

// Total:O(n1 × n2)

// Space Complexity
// O(k)
