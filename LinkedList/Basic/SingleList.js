class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  size() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  // ------------------------------
  // ⭐ Add at human-style index
  // ------------------------------
  addNodeAt(index, data) {
    if (index < 1 || index > this.size() + 1) {
      console.log("Invalid index");
      return;
    }

    const newNode = new Node(data);

    // Insert at head (index = 1)
    if (index === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let count = 1;
    let curr = this.head;

    // Stop at (index - 1)
    while (count < index - 1) {
      curr = curr.next;
      count++;
    }

    newNode.next = curr.next;
    curr.next = newNode;
  }

  // ------------------------------
  // ⭐ Remove at human-style index
  // ------------------------------
  removeAt(index) {
    if (index < 1 || index > this.size()) {
      console.log("Invalid index");
      return;
    }

    if (index === 1) {
      this.head = this.head.next;
      return;
    }

    let count = 1;
    let curr = this.head;

    // Stop at (index - 1)
    while (count < index - 1) {
      curr = curr.next;
      count++;
    }

    curr.next = curr.next.next;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

// ---------- TEST ----------
let list = new LinkedList();

list.addFirst(100); // List: 100
list.addFirst(200); // List: 200 -> 100
list.addLast(300); // List: 200 -> 100 -> 300
list.addLast(400); // List: 200 -> 100 -> 300 -> 400

list.addNodeAt(3, 500); // HUMAN index 3 → insert after 2nd node
list.removeAt(4); // HUMAN index 4 → remove 4th node

list.print();
console.log("Size:", list.size());
