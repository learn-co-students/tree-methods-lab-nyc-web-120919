function inOrder(node) {
    if (!node)
        return
    if (node.left)
        inOrder(node.left)
    console.log(node.data)
    if (node.right)
        inOrder(node.right)
}

function findOrAdd(root, node) {
    if (root.data === node.data) {
        return true
    } else if(node.data < root.data) {
        if (root.left)
            return findOrAdd(root.left, node)
        else
            root.left = node
    } else if (node.data > root.data) {
        if (root.right)
            return findOrAdd(root.right, node)
        else
            root.right = node
    }
}

function max(node) {
    if(!node.right)
        return node
    else
        return max(node.right)
}

function min(node) {
    if(!node.left)
        return node
    else
        return min(node.left)
}