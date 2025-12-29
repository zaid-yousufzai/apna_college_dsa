class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

function reverselist(head) {
  let arr = [];
  let temp = head;
  while (temp !== null) {
    arr.push(temp.data);
    temp = temp.next;
  }
  arr.reverse();

  temp = head;
  let i = 0;
  while (temp !== null) {
    temp.data = arr[i++];
    temp = temp.next;
  }
  return head;
}

function printlist(head) {
  let temp = head;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

head = reverselist(head);
printlist(head);

// ⏱ Time Complexity

// Traversing list → O(N)

// Reversing array → O(N)

// Writing back → O(N)

// ✅ Total Time: O(N)
// 🧠 Space Complexity

// Extra array used → O(N)
