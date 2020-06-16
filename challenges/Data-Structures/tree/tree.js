'use strict';
const queue = require('../stacksAndQueues/stacks-and-queues.js');

class Node{
  constructor(value, left =null,right = null){
    this.value=value;
    this.left=left;
    this.right=right;
  }
//   toString() {
//     return JSON.stringify(this);
//   }
}

class BinaryTree{
  constructor(root){
    this.root=root;
  }
  toString() {
    return JSON.stringify(this);
  }
  //depth first traversals
  // 1. Root -> Left -> Right 
  preOrder(){
    
    //store our array []
    const result = [];
    //recursive function
    const _traversal = (node) => {
      // Root 
      result.push(node.value);
      if(node.left) _traversal(node.left);
      if(node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return result;

  }
  // Left -> Root -> Right
  inOrder(){
    const result = [];
    const _traversal = (node) => {
      if(node.left) _traversal(node.left);
      result.push(node.value);
      if(node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return result;
  }
  // Left -> Right -> Root
  postOrder(){
    const result = [];
    const _traversal = (node) => {
      if(node.left) _traversal(node.left);
      if(node.right) _traversal(node.right);
      result.push(node.value);
    };
    _traversal(this.root);
    return result;
  }
  breadthFirst(value){
    let newQueue = new queue.Queue();
    newQueue.enqueue(value);
    while(newQueue.peek()){
      value = newQueue.dequeue();
      console.log(value);
      return value;
      
    }
    if(value.left !== null ){
      newQueue.enqueue(value.left);
    }
    if(value.right !== null ){
      newQueue.enqueue(value.right);
    }
  
  }
  find_maximum_value(value){

    if(!value) return 'Invalid Input';
    
    let maxValue = 0;
    const _traversal = (node) => {
      if(node.left)_traversal(node.left);
      maxValue = node.value > maxValue ? node.value : maxValue;
      if(node.right)_traversal(node.right);
      
    };
    _traversal(value.root);
    
    
    return maxValue;
  }
  
}


// class BinarySearchTree{
//   constructor(){
//     this.root=null;
//   }
//   toString() {
//     return JSON.stringify(this);
//   }
//   add(value) {

//     const node = this.root;

//     //check if the root is null
//     if (!node) {
//       this.root = new Node(value);
//       return;
//     }else{
//       let _add = (node) => {
//         if (value < node.value) {
//           if (node.left === null) {
//             node.left = new Node(value);
//             return;
//           } else if (node.left !== null) {
//             return _add(node.left);
//           }

//         } else if (value >= node.value) {

//           if (node.right === null) {
//             node.right = new Node(value);
//             return;
//           } else if (node.right !== null) {
//             return _add(node.right);
//           }

//         } else {
//           return null;
//         }
//       };
    
//       _add(node);
     
//     }
//   }
//   contains(value){
//     let node = this.root; 
//     while(node){
//       if( value === node.value){
//         return true;
//       }
//       if(value < node.value){
//         node = node.left;
//       }else{
//         node = node.right;
//       }
//     }
//     return false;
//   }
// }

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(6);
const six = new Node(9);
const seven = new Node(5);
const eight = new Node(11);
const nine = new Node(4);

one.left=two;
one.right=three;

two.left=four;
two.right=five;
five.left=seven;
five.right=eight;

three.right=six;
six.left=nine;


const binaryTree = new BinaryTree(one);
// console.log(binaryTree.postOrder(one));





// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.add(40);
// binarySearchTree.add(15);
// binarySearchTree.add(70);
// binarySearchTree.add(23);

// console.log(binarySearchTree.contains(40));


console.log(binaryTree.breadthFirst(2));
console.log(binaryTree.toString());
console.log(binaryTree.find_maximum_value(4));
module.exports = BinaryTree;

