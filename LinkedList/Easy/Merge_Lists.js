class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

function mergeList(list1, list2) {
  let ar = [];
  while (list1 !== null) {
    ar.push(list1.data);
    list1 = list1.next;
  }
  while (list2 !== null) {
    ar.push(list2.data);
    list2 = list2.next;
  }
  ar.sort((a, b) => a - b);

  let newNode = new Node(ar[0]);
  let temp = newNode;

  for (let i = 1; i < ar.length; i++) {
    temp.next = new Node(ar[i]);
    temp = temp.next;
  }

  console.log(newNode);
  // console.log(temp);
  temp = newNode;
  while (temp != null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

let list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);

let list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);

mergeList(list1, list2);

// Time Complexity:
// O((n + m) log(n + m))
// (sorting dominates)

// Space Complexity:
// O(n + m)
// (extra array used)