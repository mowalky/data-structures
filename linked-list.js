// (head)-(pointer) 100 -> 200 -> 300 -> 400 -> null (tail

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // insert last node

  // insert at index

  // Get at index

  // Remove at index

  // Clear list

  // Print list data
}

const ll = new LinkedList();

ll.insertFirst(100);

console.log(ll);
