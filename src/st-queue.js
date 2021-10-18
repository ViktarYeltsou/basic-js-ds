// const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

module.exports = class Queue {
  
  constructor(){
    this.head = null;
    this.length = 0;
  }

getUnderlyingList() {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return this.value;
}

enqueue(value) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let node = new ListNode(value);

  if (this.length === 0) {
    this.value = node; 
  } else {
    let current = this.value;

    while(current.next) {
        current = current.next;
    }
    current.next = new ListNode(value);
  }
  this.length++;
  }

dequeue() {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let current = this.value;
  this.value = current.next;
  this.length--;
  return current.value;
}
}
