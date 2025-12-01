function rev(st) {
  let str = st.split("");
  let s = 0;
  let e = str.length - 1;

  while (s < e) {
    if (str[s] === " ") {
      s++;
      continue;
    }

    if (str[e] === " ") {
      e--;
      continue;
    }

    let temp = str[s];
    str[s] = str[e];
    str[e] = temp;

    s++;
    e--;
  }
  return str.join("");
}

console.log(rev("Help others"));
console.log(rev("p l e H"));
console.log(rev("d bc a"));

// | Operation | Complexity |
// | --------- | ---------- |
// | Time      | **O(n)**   |
// | Space     | **O(n)**   |
