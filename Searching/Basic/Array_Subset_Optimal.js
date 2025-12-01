let a = [11, 7, 1, 13, 21, 3, 7, 3],
  b = [11, 3, 7, 1, 7];

function arraySubset(a, b) {
 
    let set= new Set(a)
    for(let i=0;i<b.length;i++)
    {
        if(!set.has(b[i]))
        {
            return false
        }
    }
  return true;
}
console.log(arraySubset(a, b)); // true

// | Approach      | Time Complexity | Space Complexity |
// | ------------- | --------------- | ---------------- |
// | Optimal (Set) | O(n + m)        | O(n)             |
