const LinkedList = require('../ll')


describe('testing Stack Class', () => {
  it('Creating instance testing', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toBeInstanceOf(LinkedList);
    expect(linkedList.head).toBeNull();


  })
  it('Insert at the beginning of LL', () => {
    const linkedList = new LinkedList();
    linkedList.insert('first value');
    linkedList.insert('second value');
    expect(linkedList.head.value).toEqual('second value');
    expect(linkedList.head.next.value).toEqual('first value');
    expect(linkedList.head.next.next).toBeNull

  })
  it('Append to the end of the LL', () => {
    const linkedList = new LinkedList();
    linkedList.append('first value');
    expect(linkedList.head.value).toEqual('first value');
    expect(linkedList.head.next).toBeNull
  })
  it('Append to non emphty LL ', () => {
    const linkedList = new LinkedList();
    linkedList.append('first value');
    linkedList.append('second value');
    linkedList.append('third value');
    expect(linkedList.head.value).toEqual('first value');
    expect(linkedList.head.next.value).toEqual('second value');
    expect(linkedList.head.next.next.value).toEqual('third value');
    expect(linkedList.head.next.next.next).toBeNull();
  })
  it('should delete the middle node in LL', () => {
    const linkedList = new LinkedList();
    linkedList.insert('first value');
    linkedList.append('second value');
    linkedList.append('third value');
    linkedList.deleteMiddleNode();
    expect(linkedList.head.value).toEqual('first value');
    expect(linkedList.head.next.value).toEqual('third value');
    expect(linkedList.head.next.next).toBeNull();
  })

  it(" insert node into a specific location in LL", () => {
    let list = new LinkedList();
    list.insert("first value");
    list.insert("second value");
    list.insert("third value");
    list.insertAt(1, "forth value");
    expect(list.head.value).toEqual("third value");
    expect(list.head.next.value).toEqual("forth value");
    expect(list.head.next.next.value).toEqual("second value");
    expect(list.head.next.next.next.value).toEqual("first value");
    expect(list.head.next.next.next.next).toBeNull();
  });

})