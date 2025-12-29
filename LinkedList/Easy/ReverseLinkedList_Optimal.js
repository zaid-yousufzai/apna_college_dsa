class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function printlist(head) {
  let temp = head;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

function reverselist(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

head = reverselist(head);
printlist(head);


// Time Complexity
// O(n)

// Space Complexity
// O(1)