//const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor(){
    this.head = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    aux(this.head, node);

    function aux(node, newNode){
      if(newNode.data < node.data)
      {
          if(node.left === null)
            node.left = newNode;
          else
            aux(node.left, newNode);
      }
      else
      {
          if(node.right === null)
            node.right = newNode;
          else
            aux(node.right,newNode);
      }
    }
    return;
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.find(data) ? true : false;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function aux(node, data){
      if (node === null) return null;
      else if (data < node.data) return aux(node.left, data);
      else if (data > node.data) return aux(node.right, data);
      else return node;
    }
    return aux(this.head, data);
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.minNode(this.head).data
  }

  minNode(node){
    return node.left === null ? node : this.minNode(node.left);
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.maxNode(this.head).data
  }

  maxNode(node) {
    return node.right === null ? node : this.maxNode(node.right);
  }
  
  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.head = this.removeNode(this.head, data);  
  }

  removeNode (node, data) {
    if (node === null) return null;
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    if (node.left === null) {
      node = node.right;
      return node;
    }
    if (node.right === null) {
      node = node.left;
      return node;
    }
    let tmp = this.minNode(node.right);
    node.data = tmp.data
    node.right = this.removeNode(node.right, tmp.data);
    return node;
  }
}
