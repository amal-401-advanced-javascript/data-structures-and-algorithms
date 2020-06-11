'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    

  }
}
//FILO, LIFO
class Stack{
  constructor(){
    this.top = null;
    this.emptyStack = [];
  }
  push(value){
    const newNode= new Node(value );
    this.emptyStack.unshift(newNode);
    this.top = value;
    return this.top;
  }
  pop(){
    const removeTop = this.emptyStack.shift(); 
    this.top = this.emptyStack[0] ? this.emptyStack[0] : null ; 
    return removeTop;
  }
  peek(){
    return this.top;
  }
  isEmpty(){
    if( this.top == null){
      return true;
    }else{
      return false;
    }
      
  }
  
}

//FIFO, LOLI
class Queue{
  constructor(){
    this.front=null;
    this.emptyQueue= [];
  }
  enqueue(value){
    const newNode = new Node(value);
    this.emptyQueue.push(newNode);
    this.front=value;
    return this.front;
  }
  dequeue(){
    return this.emptyQueue.shift();
  }
  peek(){
    return this.emptyQueue[0];
  }
  isEmpty(){
    if(this.emptyQueue[0]){
      return false;
    }else{
      return true;
    }
  }

}

// const stack = new Stack();
// console.log('---------Stack------------');
// console.log('is empty stack',stack.isEmpty());
// console.log(stack.push(3));
// console.log(stack.push(4));
// console.log('top node on stack',stack.peek());
// console.log('is empty stack',stack.isEmpty());
// console.log(stack.pop());
// console.log('is empty stack',stack.isEmpty());


// const queue = new Queue();
// console.log('---------Queue------------');
// console.log('is empty queue',queue.isEmpty());
// console.log(queue.enqueue(3));
// console.log(queue.enqueue(7));
// console.log('front node on queue',queue.peek());
// console.log('is empty stack',queue.isEmpty());
// console.log(queue.dequeue());
// console.log('is empty queue',queue.isEmpty());





module.exports.Node =Node;
module.exports.Queue=Queue;
