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
  append(value) {
    const node = new Node(value);
    if (this.head) {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      return currentNode.next = node;
    } else {
      return this.head = node;
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
  deleteLastOne() {
    if (this.head) {
      let currentNode = this.head;
      let i = 0
      while (currentNode.next) {
        currentNode = currentNode.next;
        i++;
      }
      let header = this.head;
      for (let y = 1; y < i; y++) {
        header = header.next;
      }
      header.next = null;
      return header;
    } else {
      return this.head;
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
  getLast() {
    let cNode = this.head;
    while (cNode.next) {
      cNode = cNode.next;
    }
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
      return (this.head);
    } else {
      return (`empty Linked List`);
    }
  }

}




module.exports = LinkedList 