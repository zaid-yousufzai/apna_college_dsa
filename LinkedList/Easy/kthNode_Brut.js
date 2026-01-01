class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findNode(head, k) {
  let arr = [];
  let temp = head;

  while (temp !== null) {
    arr.push(temp.data);
    temp = temp.next;
  }

  if (k > arr.length) {
    return -1; // k is larger than list size
  }

  return arr[arr.length - k];
}

// Circular list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(findNode(head, 2)); // true

// ⏱ Time & Space Complexity

// Time: O(N)

// Space: O(N) (array used)
