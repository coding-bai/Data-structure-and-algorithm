/*
                      3
                     / \
                    1   8
                   / \ / \
                  0  2 5  9
                      / \  \
                     4  7  10
                       /
                      6
*/
/**
 * 树的节点
 * @param {*} data 
 * @param {object} left 
 * @param {object} right 
 */
function Node(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
}
Node.prototype = {
  /**
   * 打印节点
   */
  show: function () {
    console.log(this.data)
  }
}
function Tree() {
  this.root = null
}

Tree.prototype = {
  /**
   * 插入节点
   * @param {*} data 
   */
  insert: function (data) {
    let node = new Node(data, null, null)
    if (!this.root) {
      this.root = node
      return;
    }
    let current = this.root
    let parent = null
    while (current) {
      parent = current
      if (data > parent.data) {
        current = current.right
        if (!current) {
          parent.right = node
          return;
        }
      } else {
        current = current.left
        if (!current) {
          parent.left = node
          return;
        }
      }
    }
  },
  /**
   * 前序打印节点
   * @param {*} node 
   */
  preOrder: function (node, arr = []) {
    if (node) {
      arr.push(node.data)
      this.preOrder(node.left, arr)
      this.preOrder(node.right, arr)
    }
  },
  preOrderStack: function (root) {
    const stack = []
    const result = []
    let current = root
    while (current || stack.length > 0) {
      while (current) {
        result.push(current.data)
        stack.push(current)
        current = current.left
      }
      current = stack.pop().right
    }
    return result
  },
  /**
   * 中序遍历
   * @param {*} node 
   */
  middleOrder: function (node, arr = []) {
    if (node) {
      this.middleOrder(node.left, arr)
      arr.push(node.data)
      this.middleOrder(node.right, arr)
    }
  },
  /**
   * 非递归实现中序遍历
   * @param {object} root 
   */
  middleOrderStack: function (root) {
    const result = []
    const stack = []
    let current = root
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current)
        current = current.left
      }
      current = stack.pop();
      result.push(current.data)
      current = current.right
    }
    return result
  },
  /**
   * 后序打印节点
   * @param {*} node 
   */
  laterOrder: function (node, arr = []) {
    if (node) {
      this.laterOrder(node.left, arr)
      this.laterOrder(node.right, arr)
      arr.push(node.data)
    }
  },
  laterOrderStack: function (root) {
    const stack = []
    const result = []
    let prev = null
    let current = root
    while (current ||  stack.length > 0) {
      while (current) {
        stack.push(current)
        current = current.left
      }
      current = stack[stack.length - 1]
      if(!current.right || current.right === prev) {
        current = stack.pop()
        result.push(current.data)
        prev = current
        current = null
      } else {
        current = current.right
      }
    }
    return result
  },
  /**
   * 获取最大值
   */
  getMax: function () {
    let current = this.root
    while (current) {
      if (!current.right) {
        return current.data
      }
      current = current.right
    }
  },
  /**
   * 获取最小值
   */
  getMin: function () {
    let current = this.root
    while (current) {
      if (!current.left) {
        return current.data
      }
      current = current.left
    }
  },
  /**
   * 查找深度
   * @param {*} node 
   * @param {number} deep 
   */
  getDeep: function (node, deep) {
    deep = deep || 0
    if (node === null) {
      return deep
    }
    deep++
    return Math.max(this.getDeep(node.left, deep), this.getDeep(node.right, deep))
  },
  /**
   * 查找节点
   * @param {*} data 
   * @param {object} node 
   */
  getNode: function (data, node) {
    if (node) {
      if (data === node.data) {
        return node
      } else if (data < node.data) {
        return this.getNode(data, node.left)
      } else if (data > node.data) {
        return this.getNode(data, node.right)
      }
    } else {
      return null
    }
  }
}
var t = new Tree();
t.insert(3);
t.insert(8);
t.insert(9);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(4);
t.insert(7);
t.insert(10)
t.insert(6);
t.insert(0);
console.table(t);
/* console.log(t.getMin(), t.getMax());
console.log(t.getDeep(t.root, 0));
console.log(t.getNode(5, t.root)); */
const arr = []
//t.middleOrder(t.root, arr)
console.log(t.preOrderStack(t.root))
console.log(t.middleOrderStack(t.root))
