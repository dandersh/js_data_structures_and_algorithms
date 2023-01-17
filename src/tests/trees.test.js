const Tree = require('../algorithms/trees');

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


