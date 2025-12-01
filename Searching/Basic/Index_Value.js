let a = [15, 2, 45, 4, 7];

function valueEqualIndex(a) {
  let res = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === i + 1) {
      res.push(i + 1); // push index, not value
    }
  }

  return res;
}

console.log(valueEqualIndex(a)); // [2, 4]


// | Approach    | Time     | Space                          |
// | ----------- | -------- | ------------------------------ |
// | Single loop | **O(n)** | **O(1)** (except result array) |
