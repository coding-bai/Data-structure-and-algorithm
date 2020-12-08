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
  preOrder: function (node) {
    if (node) {
      node.show()
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  },
  /**
   * 中序打印节点
   * @param {*} node 
   */
  middleOrder: function (node) {
    if (node) {
      this.middleOrder(node.left)
      node.show()
      this.middleOrder(node.right)
    }
  },
  /**
   * 后序打印节点
   * @param {*} node 
   */
  laterOrder: function (node) {
    if (node) {
      this.laterOrder(node.left)
      this.laterOrder(node.right)
      node.show()
    }
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
      if(data === node.data) {
        return node
      } else if (data < node.data) {
        return this.getNode(data,node.left)
      } else if (data > node.data) {
        return this.getNode(data,node.right)
      }
    } else {
      return null
    }
  }
}
var t = new Tree();
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);
console.log(t);
t.middleOrder(t.root)
t.preOrder(t.root)
t.laterOrder(t.root)
console.log(t.getMin(), t.getMax());
console.log(t.getDeep(t.root, 0));
console.log(t.getNode(5, t.root));
