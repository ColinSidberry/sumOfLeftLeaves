// TreeNode class definition
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// sumOfLeftLeaves function implementation
function sumOfLeftLeaves(root) {
    // Helper function to perform the recursive traversal
    function traverse(node, isLeft) {
        // Base case: if the node is null, return 0
        if (node === null) return 0;

        // Check if the current node is a left leaf
        if (isLeft && node.left === null && node.right === null) {
            return node.val;
        }

        // Recursively traverse the left and right children
        return traverse(node.left, true) + traverse(node.right, false);
    }

    // Start traversal from the root with isLeft as false
    return traverse(root, false);
}

// Sample execution
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(sumOfLeftLeaves(root)); // Output: 24
