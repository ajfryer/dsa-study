const Queue = require('../stack-and-queue/dll-queue.js');

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // if tree is empty: insert as new root
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    // if tree already exists, recursively try to insert
    // 1. traverse LEFT and try to insert
    else if (key < this.key) {
      if (this.left === null)
        this.left = new BinarySearchTree(key, value, this);
      else this.left.insert(key, value);
    }
    // 2. traverse RIGHT and try to insert
    else {
      if (this.right == null)
        this.right = new BinarySearchTree(key, value, this);
      else this.right.insert(key, value);
    }
  }

  find(key) {
    // if item is at root, return root value
    if (this.key === key) return this.value;
    // if key is less than root and left child exists, recursively try to find
    else if (key < this.key && this.left) return this.left.find(key);
    // if key is greater than root and right child exists, recursively try to find
    else if (key > this.key && this.right) return this.right.find(key);
    // else, key is not found in tree
    else throw new Error('Key Not Found');
  }

  dfs(values = []) {
    if (this.left) values = this.left.dfs(values);
    values.push(this.value);

    if (this.right) values = this.right.dfs(values);
    return values;
  }

  bfs(tree, values = []) {
    const queue = new Queue();
    const node = tree;

    queue.enqueue(node);
    console.log(queue.length);
    while (queue.head) {
      const node = queue.dequeue();
      console.log(node); //remove from the queue
      values.push(node.value); // add that value from the queue to an array

      if (node.left) queue.enqueue(node.left); //add left child to the queue

      if (node.right) queue.enqueue(node.right); // add right child to the queue
    }
    return values;
  }

  remove(key) {
    // NODE FOUND: remove it according to 4 conditional strategies
    if (this.key === key) {
      // 1. node has both LEFT and RIGHT children, so find a successor to replace it
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.key;
        successor.remove(successor.key);
      }
      // 2. node only has a LEFT child, so replace it with its LEFT child
      else if (this.left) this._replaceWith(this.left);
      // 3. node only has a RIGHT child, so replace it with its RIGHT child
      else if (this.right) this._replaceWith(this.right);
      // 4. node has NO children, so simply remove and any references to it
      else this._replaceWith(null);
    }
    // NODE NOT FOUND: key is < removal key and LEFT child exists, so traverse LEFT and recursively remove
    else if (key < this.key && this.left) this.left.remove(key);
    // NODE NOT FOUND: key is > removal key and RIGHT child exists, so traverse RIGHT recursively remove
    else if (key > this.key && this.right) this.right.remove(key);
    // KEY NOT FOUND: tree searched and key not found. Unable to remove.
    else throw new Error('Key Error');
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) this.parent.left = node;
      else if (this == this.parent.right) this.parent.right = node;

      if (node) node.parent = this.parent;
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) return this;

    return this.left._findMin();
  }

  preOrder(values = []) {
    values.push(this.key);
    if (this.left) {
      this.left.preOrder(values);
    }
    if (this.right) {
      this.right.preOrder(values);
    }
    return values;
  }

  inOrder(values = []) {
    if (this.left) {
      this.left.inOrder(values);
    }
    values.push(this.key);
    if (this.right) {
      this.right.inOrder(values);
    }
    return values;
  }

  postOrder(values = []) {
    if (this.left) {
      this.left.postOrder(values);
    }
    if (this.right) {
      this.right.postOrder(values);
    }
    values.push(this.key);
    return values;
  }
}

module.exports = BinarySearchTree;
