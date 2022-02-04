const mergeTwoLists = (list1,list2) => {

    const mergedList = [...list1,...list2];
    mergedList.sort();

   return mergedList;

};

console.log(mergeTwoLists([],[0]))
