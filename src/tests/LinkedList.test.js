const LinkedList = require('../data_structures/LinkedList/LinkedList')

let linkedList
beforeEach(() => {
    linkedList = new LinkedList()
})

describe('Linked List data structure', () => {
    test('Linked List should exist', () => {
        expect(typeof linkedList).toBe("object")
    })
    
})
