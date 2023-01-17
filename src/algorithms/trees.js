// depth first search
// algorithm for traversing/searching tree or graphs

// breadth first search
// algorithm that takes the tree root or a search key and searches sibling nodes before searching descenant nodes

// create tree
// insert(key)
// search(key)
//inorder traverse (Depth first)
// preOrderTraverse (Depth first)
// postorder traverse (Depth first)
// min
// max
// remove (very difficult)

// export const Compare = {
//   LESS_THAN: -1,
//   BIGGER_THAN: 1,
//   EQUALS: 0
// }; 

// export function defaultCompare(a, b) {
//   if (a === b) {
//     return Compare.EQUALS;
//   }
//   return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
// }



class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  insert(key) {

    if (this.root === null) {
      this.root = new Node(key)
    } else {
      insertNode(root, newNode)
    }
  }

  insertNode() {
    if (node.left == null) {
      node.left = new Node(key);
    } else {
      this.insertNode(node.left, key);
    }
    if (node.right === null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

  search(key) {

  }
}

module.exports = Tree