function isSubsetBrute(a, b) {
    for (let i = 0; i < b.length; i++) {
        let found = false;

        for (let j = 0; j < a.length; j++) {
            if (b[i] === a[j]) {
                found = true;
                break;
            }
        }

        if (!found) return false;
    }
    return true;
}

console.log(isSubsetBrute([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7]));

// ⏳ Time Complexity:

// O(n × m) → nested loops

// 🧠 Space Complexity:

// O(1) → no extra data structure