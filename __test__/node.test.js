'use strict'
const Node = require('../node')

describe('testing node class', () => {
  it('test create new node', () => {

    const val = 'ahmed'
    const node = new Node(val)
    expect(node).toBeInstanceOf(Node)
    expect(node.value).toEqual('ahmed')
    expect(node.next).toBeNull();
  })

})