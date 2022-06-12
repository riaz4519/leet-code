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

  push(data) {
    if (!this.head) return (this.head = new Node(data));

    let current = this.head;
    while (current){
        this.next
    }

  }
}

const mergeTwoLists = (list1, list2) => {
  let mergedList = [];

  return mergedList;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
