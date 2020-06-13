'use strict';

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
  constructor(root=null){
    this.root=root;
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
}


class BinarySearchTree{
  constructor(){
    this.root=null;
  }
  toString() {
    return JSON.stringify(this);
  }
  add(value) {

    const node = this.root;

    //check if the root is null
    if (!node) {
      this.root = new Node(value);
      return;
    }else{
      let _add = (node) => {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else if (node.left !== null) {
            return _add(node.left);
          }

        } else if (value >= node.value) {

          if (node.right === null) {
            node.right = new Node(value);
            return;
          } else if (node.right !== null) {
            return _add(node.right);
          }

        } else {
          return null;
        }
      };
    
      _add(node);
     
    }
  }
  contains(value){
    let node = this.root; 
    while(node){
      if( value === node.value){
        return true;
      }
      if(value < node.value){
        node = node.left;
      }else{
        node = node.right;
      }
    }
    return false;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
// const seven = new Node(7);
// const eight = new Node(8);
// const nine = new Node(9);

one.right=three;
one.left=two;

three.right=four;
three.left=five;

two.left=six;
// six.right=seven;
// seven.left=eight;
// seven.right=nine;

const binaryTree = new BinaryTree(one);
console.log(binaryTree.postOrder());

const binarySearchTree = new BinarySearchTree();
binarySearchTree.add(40);
binarySearchTree.add(15);
binarySearchTree.add(70);
binarySearchTree.add(23);
console.log(binarySearchTree.toString());
console.log(binarySearchTree.contains(40));


