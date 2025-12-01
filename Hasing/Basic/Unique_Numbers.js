function uniqueNumbers(L, R) {
  let res = [];

  for (let num = L; num <= R; num++) {
    let s = String(num);
    let set = new Set(s);

    if (set.size === s.length) {
      res.push(num);
    }
  }

  return res;
}

console.log(uniqueNumbers(10, 20));

// ⏱ Time Complexity:

// Total = O(N)

// 🧠 Space Complexity:

// Set at most size 10 → O(1)

// Output list only → given by problem

// Aux space = O(1)
