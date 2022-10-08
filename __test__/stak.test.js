'use strict';

const Stack = require('../Stack/stack');

describe('testing Stack class', () => {
  it('Creating Instance Testing', () => {
    const stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.top).toBeNull();
  });
  it('Testing isEmpty ', () => {
    const stack = new Stack();
    let emphty = stack.isEmpty();
    expect(emphty).toEqual(1);
  });
  it('Testing Push ', () => {
    const stack = new Stack();
    stack.push('1');
    stack.push('2');
    expect(stack.top.value).toEqual('2');
  })
  it('Testing Pop ', () => {
    const stack = new Stack();
    stack.push('1');
    stack.push('2');
    stack.pop();
    expect(stack.top.value).toEqual('1');
  })
  it('Testing Peek ', () => {
    const stack = new Stack();
    stack.push('1');
    stack.pop();
    let test = stack.peek();
    expect(test).toEqual('1');
  })

});