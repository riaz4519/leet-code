class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeTwoLists = (list1, list2) => {
  let head;
  let current;
  let count = 0;
  console.log(list1, list2);
  while (list1 || list2) {
    console.log("here");

    if (list1 && list2) {
      if (list1.val < list2.val) {
        if (head === undefined) {
          head = list1;
          current = head;
          continue;
        }
        current.next = list1;
        list1 = list1.next;
        continue;
      } 
    //   else {
    //     if (head === undefined) {
    //       head = list2;
    //       current = head;
    //       continue;
    //     }
    //     current.next = list2;
    //     list2 = list2.next;
    //     continue;
    //   }
    // } else if (list1.next === null) {
    //   if (head === undefined) {
    //     head = list2;
    //     current = head;
    //     continue;
    //   }
    //   current.next = list2;
    //   list2 = list2.next;
    //   continue;
    // } else {
    //   if (head === undefined) {
    //     head = list1;
    //     current = head;
    //     continue;
    //   }
    //   current.next = list1;
    //   list1 = list1.next;
    //   continue;
    // }
  }
  return head;
};

console.log(mergeTwoLists(new ListNode(10), new ListNode(12)));
//console.log(new ListNode(10));
