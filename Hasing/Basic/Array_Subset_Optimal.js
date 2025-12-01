function isSubsetOptimal(a, b) {
    let set = new Set(a);

    for (let i = 0; i < b.length; i++) {
        if (!set.has(b[i])) return false;
    }
    return true;
}

console.log(isSubsetOptimal([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7]));


// ⏳ Time Complexity:

// Creating Set → O(n)

// Checking b elements → O(m)
// 📌 Total = O(n + m)

// 🧠 Space Complexity:

// Set stores elements of a[] → O(n)