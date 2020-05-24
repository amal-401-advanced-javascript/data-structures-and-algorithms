'use strict';

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;

    }

}

class singlyLinkedList {
    constructor() {
        this.head = null;

    }

    insert(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return this;
        }


        newNode.next = this.head;
        this.head = newNode;
        return this;

    }
    includes(value) {
        if (!this.head) {
            return false;
        }
        let current = this.head;
        while (current.next) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

toString(){
    //"{ a } -> { b } -> { c } -> NULL";
    let current = this.head;
    let str = '';
    if(!this.head){
        return 'Empty linked list {}';
    }
    while(current.next){

      str += ` { ${current.value} } ->`;
      current = current.next;
    }
    str += `{ ${current.value} } -> NULL`;

    return str;
  }
}
module.exports.Node = Node;
module.exports.singlyLinkedList = singlyLinkedList;
