class Queue  {
  constructor() {
    this.items = []
  }

  // enqueue
  enqueue = (...items) => {
    return this.items.unshift(...items)
  }
  // dequeue
  dequeue = () => {
    return this.items.shift()
  }
  // front --> returns first element from the queue, first one added, and first one to be removed from the queue
  front = () => {
    return this.items[0]
  }
  // isEmpty
  isEmpty = () => {
    return this.size() === 0
  }
  // size
  size = () => {
    return this.items.length
  }
}

module.exports = Queue