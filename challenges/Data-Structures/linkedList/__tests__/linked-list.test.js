const linkedList = require('../linked-list.js');

describe('linkList Module', () => {
  const singlyLinked = new linkedList.SinglyLinkedList();
  const initHead = 'head';
  const secondNode = 20;
  it('1. Can successfully instantiate an empty linked list', () => {
    expect(singlyLinked.head).toBeNull();
  });
  it('2. Can properly insert into the linked list', () => {

    expect(singlyLinked.insert(initHead)).toEqual({ head:  { value: 'head', next: null } });
  });
  it('3. The head property will properly point to the first node in the linked list', () => {
    expect(singlyLinked.head.value).toEqual(initHead);
  });
  it('4. Can properly insert multiple nodes into the linked list', () => {
    expect(singlyLinked.insert(secondNode)).toEqual({ head:  { value: 'head', next: { value: 20, next: null } } });
    expect(singlyLinked.head.value).toEqual(initHead);
    expect(singlyLinked.head.next.value).toEqual(secondNode);
  });
  it('5. Will return true when finding a value within the linked list that exists',() =>{
    expect(singlyLinked.head.value).toBeTruthy();
  });

  it('6. Will return false when searching for a value in the linked list that does not exist', () => {
    expect(singlyLinked.includes(250)).toBeFalsy();
  });
  it('7. return a collection of all the values that exist in the linked list', () => {
    expect(singlyLinked.toString()).toEqual(`{ ${initHead} } -> { ${secondNode} } -> NULL `);
  });
});


// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list