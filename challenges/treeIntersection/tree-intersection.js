'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    const result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
}
function tree_intersection(tree1,tree2){
  let results = [];
  tree1.forEach(val =>{
    if(tree2.includes(val)) results.push(val);
  });
  return results;
}
const one = new Node(200);
const two = new Node(150);
const three = new Node(3);
const four = new Node(70);
const five = new Node(5);
const six = new Node(10);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
one.left = two;
one.right = three;
three.right = four;
three.left = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
const tree = new BinaryTree(one);
console.log('Tree 1 -->',tree.preOrder());
let treeOne = tree.preOrder();
// ---------------------------------------------
const one1 = new Node(200);
const two2 = new Node(150);
const three3 = new Node(50);
const four4 = new Node(70);
const five5 = new Node(80);
const six6 = new Node(300);
const seven7 = new Node(10);
const eight8 = new Node(5);
const nine9 = new Node(1);
one1.left = two2;
one1.right = three3;
three3.right = four4;
three3.left = five5;
two2.left = six6;
six6.right = seven7;
seven7.left = eight8;
seven7.right = nine9;
const tree2 = new BinaryTree(one1);
console.log('Tree 2 -->',tree2.preOrder());
let treeTwo = tree2.preOrder();
//--------------------------------------------
tree_intersection(treeOne,treeTwo);