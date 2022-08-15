class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeTwoLists = (list1, list2) => {
  let head;
  let current;

  while (list1 || list2) {
    if (!head) {
      if (list1.val <= list2.val) {
        current = new ListNode(list1.val);
        list1 = list1.next;
      } else {
        current = new ListNode(list2.val);
        list2 = list2.next;
      }
      head = current;
      continue;
    } else if (list1 && list2) {
      if (list1.val <= list2.val) {
        current.next = new ListNode(list1.val);
        list1 = list1.next;
        current = current.next;
      } else {
        current.next = new ListNode(list2.val);
        list2 = list2.next;
        current = current.next;
      }
    } else if (list1) {
      current.next = new ListNode(list1.val);
      list1 = list1.next;
      current = current.next;
    } else {
      current.next = new ListNode(list2.val);
      list2 = list2.next;
      current = current.next;
    }
  }
  return head;
};
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(2);
list2.next = new ListNode(3);
list2.next.next = new ListNode(5);

function itter(listmer){

  while(listmer){
    console.log(listmer.val);
    listmer = listmer.next;
  }

}

itter(mergeTwoLists(list1, list2));
//console.log(list1, list2);
