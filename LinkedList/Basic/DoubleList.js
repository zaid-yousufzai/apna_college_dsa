class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    let newNode = new Node(data);
    newNode.next = this.head;

    if (this.head) {
      this.head.prev = newNode;
    }

    this.head = newNode;
  }

  addLast(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    newNode.prev = current;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  addNodeAt(index, data) {
    if (index < 1 || index > this.size() + 1) {
      console.log("Invalid index");
      return;
    }

    let newNode = new Node(data);

    // Insert at head
    if (index === 1) {
      newNode.next = this.head;
      if (this.head) this.head.prev = newNode;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let count = 1;

    while (count < index - 1) {
      current = current.next;
      count++;
    }

    newNode.next = current.next;
    newNode.prev = current;

    if (current.next) {
      current.next.prev = newNode;
    }

    current.next = newNode;
  }

  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next;

    if (this.head) this.head.prev = null;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;

    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  removeNodeAt(index) {
    if (index < 1 || index > this.size()) return;

    if (!this.head) return;

    if (index === 1) {
      this.removeFirst();
      return;
    }

    let current = this.head;
    let count = 1;

    while (count < index - 1) {
      current = current.next;
      count++;
    }

    let nodeToDelete = current.next; // the node at index

    current.next = nodeToDelete.next;

    if (nodeToDelete.next) {
      nodeToDelete.next.prev = current;
    }
  }
}

// TESTING
let list = new DoubleLinkedList();
list.addFirst(100);
list.addFirst(200);
list.addLast(300);
list.addNodeAt(2, 500);
list.removeNodeAt(3);
list.print();
