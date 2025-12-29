class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAtEnd(head, x) {
  let newNode = new Node(x);

  if (head === null) {
    return newNode;
  }

  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }

  temp.next = newNode;
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
head.next.next.next.next = new Node(5);

head = insertAtEnd(head, 6);
printlist(head);


// | Operation         | Complexity |
// | ----------------- | ---------- |
// | Traversing to end | **O(N)**   |
// | Space             | **O(1)**   |
