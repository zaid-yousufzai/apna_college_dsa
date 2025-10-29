// Example:

// Input:[3 1 2 5 3] 

// Output:[3, 4] 

function findMissingAndDuplicateBrute(arr) {
    let n = arr.length;
    let count = new Array(n).fill(0);

    let duplicate = -1;
    let missing = -1;

    // Count occurrences
    for (let i = 0; i < n; i++) {
        count[arr[i] - 1]++;
    }

    // Find missing/duplicate
    for (let i = 0; i < n; i++) {
        if (count[i] === 0) missing = i + 1;
        if (count[i] > 1) duplicate = i + 1;
    }
    return [duplicate, missing];
}


console.log(findMissingAndDuplicateBrute([3, 1, 2, 5, 3])); // [3, 4]


// ✅ Time: O(n)
// ✅ Space: O(n)

