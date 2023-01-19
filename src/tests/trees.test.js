const Tree = require('../data_structures/Trees/Trees');

let tree
beforeEach( () => {
  tree = new Tree()
  
})

describe('Tree Algorithm', () => {

  test.only('Tree to exist', () => {
    expect(typeof tree.insert).toBe("function");
    expect(tree).toEqual(expect.any(Object))
  });
})


