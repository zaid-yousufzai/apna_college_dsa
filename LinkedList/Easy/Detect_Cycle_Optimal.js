class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isCyclic(head) {   // ❌ removed semicolon
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

// Create circular list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head; // cycle

let res = isCyclic(head);
console.log(res); // true


// ⏱ Time & Space Complexity

// Time: O(N)

// Space: O(1)