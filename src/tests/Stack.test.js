const { templateSettings } = require('lodash');
const Stack = require('../data_structures/Stack/Stack')

let stack 
beforeEach(() => {
  stack = new Stack()
});

describe('Stack data structure', () => {
  test('Should push new items onto the stack', () => {
    expect(typeof stack.push).toBe("function")
    stack.push(1,3,5)
    expect(stack.items).toStrictEqual([1,3,5])
  })

  test('Should pop items from the stack', () => {
    expect(typeof stack.pop).toBe("function")
    stack.push(1,3,5)
    stack.pop()
    expect(stack.items).toStrictEqual([1,3])
  })

  test('Should show top item on the stack', () => {
    expect(typeof stack.peek).toBe("function")
    stack.push(1,3,5)
    const peeked = stack.peek()
    expect(peeked).toBe(5)
  })

  test.only('Should show items as empty', () => {
    expect(typeof stack.isEmpty).toBe("function")
    expect(stack.isEmpty()).toBe(true)
  })
})


