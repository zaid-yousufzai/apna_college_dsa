// Example:

// Input:[3 1 2 5 3] 

// Output:[3, 4] 

function findMissingAndDuplicateOptimal(arr) {
    let n = arr.length;

    // Use BigInt to handle overflow for large n (e.g., 10^5)
    let S1 = BigInt((n * (n + 1)) / 2);
    let S2 = BigInt((n * (n + 1) * (2 * n + 1)) / 6);

    let A1 = 0n, A2 = 0n;
    for (let i = 0; i < n; i++) {
        A1 += BigInt(arr[i]);
        A2 += BigInt(arr[i]) * BigInt(arr[i]);
    }

    // Differences
    let diff1 = A1 - S1; // x - y
    let diff2 = A2 - S2; // x² - y² = (x - y)(x + y)

    // x + y = diff2 / diff1
    let sumXY = diff2 / diff1;

    // Solve for x and y
    let duplicate = (diff1 + sumXY) / 2n;
    let missing = duplicate - diff1;

    return [Number(duplicate), Number(missing)];
}

// Example
console.log(findMissingAndDuplicateOptimal([3, 1, 2, 5, 3])); // [3, 4]
