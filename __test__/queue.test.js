'use strict'

const LinkedList = require('./ll.test')
const Queue = require('../queue/queue')


describe('testint Queue class', () => {
  it('creating instance testing', () => {
    const queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
    expect(queue.top).toBeNull();
  })
  it('isEmpty', () => {
    const queue = new Queue();
    let result = queue.isEmpty();
    expect(result).toEqual(1);
  });
  it(' enqueue', () => {
    const queue = new Queue();
    queue.enqueue('1');
    queue.enqueue('2');
    queue.enqueue('3');
    expect(queue.top.value).toEqual('1')
  })
  it('dequeue', () => {
    const queue = new Queue();
    queue.enqueue('1');
    queue.enqueue('2');
    queue.enqueue('3');
    queue.dequeue();
    expect(queue.top.value).toEqual('2');
  });

  it('peek', () => {
    const queue = new Queue();
    queue.enqueue('1');
    queue.enqueue('2');
    queue.enqueue('3');
    queue.dequeue();
    let result = queue.peek();
    expect(result).toEqual('2');
  });
})