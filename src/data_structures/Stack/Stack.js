class Stack {
  constructor() {
    this.items = []
  }

  // push items onto stack
  push = (...newItems) => {
    return this.items.push(...newItems)
  }

  // pop top item from stack and return removed element
  pop = () => {
    return this.items.pop()
  }
  

  // peek show the top element on the stack without modifying the stack
  peek = () => {
    return this.items[this.items.length - 1]
  }
  // isEmpty checks if stack is empty
  isEmpty = () => {
    return this.size === 0
  }
  // clear all elements off the stack
  clear = () => {
    this.items = []
  }
  // size will return how many items are in the stack
  get size() {
    return this.items.length
  }
}

module.exports = Stack