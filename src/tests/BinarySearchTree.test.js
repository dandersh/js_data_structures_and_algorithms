const BinarySearchTree = require('../data_structures/Trees/BinarySearchTree')

let binarySearchTree
beforeEach(() => {
    binarySearchTree = new BinarySearchTree()
})

describe('Binary Search Tree', () => {
    it('Binary Search Tree should exist ', () => {
        expect(typeof binarySearchTree).toBe("object")
    });

    it('Should insert root node', () => {
        expect(typeof binarySearchTree.insert).toBe("function");
        binarySearchTree.insert("firstNode");
        expect(binarySearchTree.root).toEqual({"key": "firstNode", "left": null, "right": null})
    });


    
})
