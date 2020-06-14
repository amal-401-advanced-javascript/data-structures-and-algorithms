'use strict';

function fizzBuzzTree(root) {

  if (root % 3 === 0 && root % 5 === 0) {
    return root = 'FizzBuzz';
    
  } else if (root % 5 === 0) {
    return root = 'Buzz';
  } else if (root % 3 === 0) {
    return root = 'Fizz';
  }else if(root) {
    return `"${root}"`;
  }
  if (root.left) {
    fizzBuzzTree(root.left);
  }
  if (root.right) {
    fizzBuzzTree(root.right);
  }
}

const x = fizzBuzzTree(7);
console.log(x);




