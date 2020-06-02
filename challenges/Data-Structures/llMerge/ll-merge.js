'use strict';

const linkedList = require('../linkedList/linked-list').SinglyLinkedList;

let list1 = new linkedList;
let list2 = new linkedList;
list1.append(1);
list1.append(3);
// list1.append(2);
console.log(list1.toString());

list2.append(5);
list2.append(9);
list2.append(4);
console.log(list2.toString());

function mergeLists(list1, list2){

  const afterMer = new linkedList;
  let first = list1.head;
  let second = list2.head;
  while(second ||first ){
    if(first){
        afterMer.append(first.value);
        first = first.next;
   
    }
    if(second){
        afterMer.append(second.value);
        second = second.next;
     
    }
  }
  return afterMer;

}

console.log(mergeLists(list1,list2).toString());
