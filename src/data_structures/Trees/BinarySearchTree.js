const Node = require('./Node')
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        // Create root node
        if (this.root === null) {
            this.root = new Node(key)
        } else {
            // insert a new node
        }
    }
}

module.exports = BinarySearchTree