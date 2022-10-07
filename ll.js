'use strict'
const Node = require('./node')
class LinkedList {
  constructor() {
    this.head = null
  }
  insert(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
  }
  append(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
    } else {
      let cNode = this.head;
      while (cNode.next) {
        cNode = cNode.next
      }
      cNode.next = node
    }

  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  deleteMiddleNode() {
    if (this.size() === 1) {
      this.head = null;
      return;
    } else if (this.size() === 2) {
      this.head.next = null;
      return;
    } else if (this.size() > 2 && this.size() % 2 === 0) {
      let count = (this.size() / 2);
      let cNode = this.head;
      while (count - 1) {
        cNode = cNode.next;
        count--;
      }
      cNode.next = cNode.next.next;
      return;
    } else if (this.size() > 2 && this.size() % 2 !== 0) {
      let count = (this.size() / 2) + 0.5;
      let cNode = this.head;
      while (count - 2) {
        cNode = cNode.next;
        count--;
      }
      cNode.next = cNode.next.next;
    } else {
      return;
    }
  }
  insertAt(location, value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      for (let i = 0; i < location - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
  }


}




module.exports = LinkedList 