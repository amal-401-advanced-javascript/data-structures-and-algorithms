'use strict';

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;

  }

}

class SinglyLinkedList {
  constructor() {
    this.head = null;

  }

  insert(value='') {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }

    current.next = newNode;
    return this;

  }
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // toString(){
  //   //"{ a } -> { b } -> { c } -> NULL";
  //   let current = this.head;
  //   let str = `{ ${current.value} }`;
  //   while(current.next){
  //     current = current.next;
  //     str += ` -> { ${current.value} }`;
     
  //   }
  //   return str + ' -> NULL ';
  // }

  append(value){
    let addNodeToEnd = new Node(value);

    if(!this.head){
      this.head = addNodeToEnd;
      return this;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = addNodeToEnd;
    return this;
  }
  insertBefore(value, newVal){
    let foundVal = false;
    let current = this.head;
    if(value === current.value){
      let addBeforeFirstNode = new Node(newVal);
      addBeforeFirstNode.next = this.head;
      this.head = addBeforeFirstNode;
    
    }else{
      while(current.next !=null && !foundVal){
        if( value === current.next.value){
          let addBeforeFirstNode = new Node(newVal);
          addBeforeFirstNode.next = current.next;
          current.next = addBeforeFirstNode;
          foundVal = true;
        }else{
          current = current.next;
        }
        
      }
      return this;
    }
  }
  
  insertAfter(value, newVal){
    
    let foundVal = false;
    let current = this.head;
    
    if(value === current.value){
      this.append(newVal);
    }else { 
      while(current && ! foundVal){
        if(value == current.value){
          let addAfterFirstNode = new Node(newVal);
          addAfterFirstNode.next = current.next;
          current.next = addAfterFirstNode;
          foundVal = true;
        }else{
          current = current.next;
        }
      }

    }
    return this;

  }
  kthFromEnd(k){
  
    let  listi = this.head ;
    let count = 0;

    while (listi != null) {
      count ++;
      listi = listi.next;
    }
    let length = count;

    if (k < 0 || k >= length) {
      return null;
    }

    let pos = length - k;
    let ctr = 1;
    let current = this.head;
    while(current != null && ctr < pos ){
      current=current.next;
      ctr += 1 ;
    }
    return current.value;
  }
  
  
}

let linkedListInsertions = new SinglyLinkedList();
linkedListInsertions.append(1);
linkedListInsertions.append(3);
linkedListInsertions.append(8);
linkedListInsertions.append(2);


//test at least once
// console.log(linkedListInsertions.kthFromEnd(0));


// linkedListInsertions.append(1);
// linkedListInsertions.append(2);
// linkedListInsertions.append(2);
// // linkedListInsertions.append(4);

// console.log(linkedListInsertions.insertAfter(4,5));


module.exports.SinglyLinkedList = SinglyLinkedList;
