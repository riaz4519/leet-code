class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeTwoLists = (list1, list2) => {
  let head;
  let current;

  while (list1 !== null || list2 !== null) {
    console.log("dat");
    if (list1 && list2) {
      if (list1.val <= list2.val) {
        if (!head) {
          head = list1;
          current = head;
          list1 = list1.next;
        } else {
          current.next = list1;
          list1 = list1.next;
        }
      } else {
        if (!head) {
          head = list2;
          current = head;
          list2 = list2.next;
        } else {
          current.next = list2;
          list2 = list2.next;
        }
      }
    } else if (list1) {
      if (!head) {
        head = list1;
        current = head;
        list1 = list1.next;
      } else {
        current.next = list1;
        list1 = list1.next;
      }
    } else if (list2) {
      if (!head) {
        head = list2;
        current = head;
        list2 = list2.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
    }

   

  }
  return head;
};
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next = new ListNode(4);

let list2 = new ListNode(5)
list2.next = new ListNode(6);
list2.next = new ListNode(7);

console.log(mergeTwoLists(list1,list2));
//console.log(new ListNode(10));
