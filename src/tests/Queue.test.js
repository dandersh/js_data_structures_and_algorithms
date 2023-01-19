const Queue = require('../data_structures/Queue/Queue')

let queue
beforeEach( () => {
  queue = new Queue()
})

describe('Queue data structure', () => {
  test('Should enqueue items onto the queue', () => {
    expect(typeof queue.enqueue).toBe("function")
    queue.enqueue(2, 3, 4)
    expect(queue.items).toStrictEqual([2, 3, 4]) 
  })

  test('should dequeue items from the queue', () => {
    expect(typeof queue.dequeue).toBe("function")
    queue.enqueue(2, 3, 4)
    expect(queue.dequeue()).toStrictEqual(2)
  })

  test('should get front item from the queue', () => {
    expect(typeof queue.front).toBe("function")
    queue.enqueue(2, 3, 4)
    expect(queue.front()).toStrictEqual(2)
  })

  test('should return true when items are empty', () => {
    expect(typeof queue.isEmpty).toBe("function")
    expect(queue.size()).toBe(0)
    expect(queue.isEmpty()).toBe(true)
  })

  test('should return false when items are not empty', () => {
    expect(typeof queue.isEmpty).toBe("function")
    queue.enqueue(2, 3, 4)
    expect(queue.isEmpty()).toBe(false)
  })

  test('should return true when items are empty', () => {
    expect(typeof queue.size).toBe("function")
    queue.enqueue(2, 3, 4)
    expect(queue.size()).toBe(3)
  })
  
  
})
