class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function removeNode(head, k) {
    if (head === null) return null;

    if (k === 1) {
        return head.next;
    }

    let temp = head;
    let count = 1;

    while (temp !== null && temp.next !== null) {
        if (count === k - 1) {
            temp.next = temp.next.next;
            return head;
        }
        count++;
        temp = temp.next;
    }

    // if k > length, list remains unchanged
    return head;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);


console.log(removeNode(head,3));



// Time: O(N)

// Space: O(1) ✅
