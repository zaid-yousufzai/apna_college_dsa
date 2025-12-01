function repet(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j]) {
        count++;
      }
      if (count > 1) {
        return str[i];
      }
    }
  }
  return -1;
}

console.log(repet("geeksforgeeks"));
console.log(repet("abcde"));

// ⏱ Time Complexity: O(n²)
// 🗂 Space Complexity: O(1)
