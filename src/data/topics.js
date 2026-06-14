const topics = [
  {
    slug: "array-and-string",
    name: "Array and String",
    accent: "green",
    questions: [
      { id: "arr-1", title: "Search in a sorted 2D matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
      { id: "arr-2", title: "Grid Unique Paths | Count paths from left-top to the right bottom of a matrix", link: "https://leetcode.com/problems/unique-paths/" },
      { id: "arr-3", title: "Two Sum : Check if a pair with given sum exists in Array", link: "https://leetcode.com/problems/two-sum/" },
      { id: "arr-4", title: "Longest Consecutive Sequence in an Array", link: "https://leetcode.com/problems/longest-consecutive-sequence/" },
      { id: "arr-5", title: "Length of the longest subarray with zero Sum", link: "https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1" },
      { id: "arr-6", title: "Length of Longest Substring without any Repeating Character", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { id: "arr-7", title: "Count the number of subarrays with given xor K", link: "https://www.interviewbit.com/problems/subarray-with-given-xor/" },
      { id: "arr-8", title: "Merge Overlapping Sub-intervals", link: "https://leetcode.com/problems/merge-intervals/" },
      { id: "arr-9", title: "Merge two Sorted Arrays Without Extra Space", link: "https://leetcode.com/problems/merge-sorted-array/" },
      { id: "arr-10", title: "Program to generate Pascal's Triangle", link: "https://leetcode.com/problems/pascals-triangle/" },
      { id: "arr-11", title: "Next permutation : find next lexicographically greater permutation", link: "https://leetcode.com/problems/next-permutation/" },
      { id: "arr-12", title: "Kadane's Algorithm : Maximum Subarray Sum in an Array", link: "https://leetcode.com/problems/maximum-subarray/" },
      { id: "arr-13", title: "Sort an array of 0s, 1s and 2s", link: "https://leetcode.com/problems/sort-colors/" },
      { id: "arr-14", title: "Grid Unique Paths", link: "https://leetcode.com/problems/unique-paths/" },
      { id: "arr-15", title: "Reverse Pairs", link: "https://leetcode.com/problems/reverse-pairs/" },
      { id: "arr-16", title: "Pow(x,n) : Find X raised to the power N", link: "https://leetcode.com/problems/powx-n/" },
      { id: "arr-17", title: "4 Sum problem", link: "https://leetcode.com/problems/4sum/" },
      { id: "arr-18", title: "Max consecutive Ones", link: "https://leetcode.com/problems/max-consecutive-ones/" },
      { id: "arr-19", title: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/" },
      { id: "arr-20", title: "Longest Palindrome in a string", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
      { id: "arr-21", title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/" },
      { id: "arr-22", title: "Minimum characters needed to be inserted in the beginning to make it palindromic", link: "https://www.codingninjas.com/codestudio/problems/893000?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website" },
      { id: "arr-23", title: "Check for Anagrams", link: "https://leetcode.com/problems/valid-anagram/" }
    ]
  },
  {
    slug: "greedy",
    name: "Greedy",
    accent: "cyan",
    questions: [
      { id: "greedy-1", title: "N meetings in one room", link: "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1" },
      { id: "greedy-2", title: "Minimum number of platforms required for a railway", link: "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#" },
      { id: "greedy-3", title: "Job Sequencing Problem", link: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#" },
      { id: "greedy-4", title: "Fractional Knapsack Problem", link: "https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1" },
      { id: "greedy-5", title: "Find minimum number of coins", link: "https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/" }
    ]
  },
  {
    slug: "dp",
    name: "Dp",
    accent: "blue",
    questions: [
      { id: "dp-1", title: "Maximum Product Subarray in an Array", link: "https://leetcode.com/problems/maximum-product-subarray/" },
      { id: "dp-2", title: "Longest Common Subsequence |", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { id: "dp-3", title: "0/1 Knapsack", link: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1" },
      { id: "dp-4", title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/" },
      { id: "dp-5", title: "Rod Cutting Problem", link: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/" },
      { id: "dp-6", title: "Subset sum equal to target", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { id: "dp-7", title: "Coin Change 2", link: "https://leetcode.com/problems/coin-change/" },
      { id: "dp-8", title: "Minimum Path Sum In a Grid", link: "https://leetcode.com/problems/minimum-path-sum/" },
      { id: "dp-9", title: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { id: "dp-10", title: "Maximum sum increasing subsequence", link: "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1" },
      { id: "dp-11", title: "Matrix Chain Multiplication", link: "https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1" },
      { id: "dp-12", title: "Minimum sum path in the matrix, (count paths and similar type do, also backtrack to find the Minimum path)", link: "https://leetcode.com/problems/minimum-path-sum/" },
      { id: "dp-13", title: "Maximum profit in Job scheduling", link: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1" }
    ]
  },
  {
    slug: "binary-search",
    name: "Binary Search",
    accent: "purple",
    questions: [
      { id: "bs-1", title: "Nth Root of a Number using Binary Search", link: "https://bit.ly/3rj7Ib1" },
      { id: "bs-2", title: "Search Single Element in a sorted array", link: "https://leetcode.com/problems/single-element-in-a-sorted-array/" },
      { id: "bs-3", title: "Search Element in a Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
      { id: "bs-4", title: "Median of Two Sorted Arrays of different sizes", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
      { id: "bs-5", title: "K-th Element of two sorted arrays", link: "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1" },
      { id: "bs-6", title: "Allocate Minimum Number of Pages", link: "https://www.interviewbit.com/problems/allocate-books/" },
      { id: "bs-7", title: "Aggressive Cows", link: "https://www.spoj.com/problems/AGGRCOW/" }
    ]
  },
  {
    slug: "heaps",
    name: "Heaps",
    accent: "teal",
    questions: [
      { id: "heap-1", title: "Maximum Sum Combination", link: "https://www.interviewbit.com/problems/maximum-sum-combinations/" },
      { id: "heap-2", title: "Kth Largest Element", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
      { id: "heap-3", title: "Top K frequent elements", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
      { id: "heap-4", title: "Merge K sorted arrays", link: "https://www.codingninjas.com/codestudio/problems/merge-k-sorted-arrays_975379" },
      { id: "heap-5", title: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/" }
    ]
  },
  {
    slug: "recursion",
    name: "Recursion",
    accent: "orange",
    questions: [
      { id: "rec-1", title: "Subset Sum : Sum of all Subsets", link: "https://practice.geeksforgeeks.org/problems/subset-sums2234/1" },
      { id: "rec-2", title: "Subset - II | Print all the Unique Subsets", link: "https://leetcode.com/problems/subsets-ii/" },
      { id: "rec-3", title: "Combination Sum - 1", link: "https://leetcode.com/problems/combination-sum/" },
      { id: "rec-4", title: "Combination Sum II - Find all unique combinations", link: "https://leetcode.com/problems/combination-sum-ii/" },
      { id: "rec-5", title: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/" },
      { id: "rec-6", title: "Find K-th Permutation Sequence", link: "https://leetcode.com/problems/permutation-sequence/" }
    ]
  },
  {
    slug: "linked-list",
    name: "Linked List",
    accent: "green",
    questions: [
      { id: "ll-1", title: "Check if given Linked List is Palindrome", link: "https://leetcode.com/problems/palindrome-linked-list/" },
      { id: "ll-2", title: "Reverse Linked List in groups of Size K", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
      { id: "ll-3", title: "Detect a Cycle in a Linked List", link: "https://leetcode.com/problems/linked-list-cycle/" },
      { id: "ll-4", title: "Find intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
      { id: "ll-5", title: "Starting point of loop in a Linked List", link: "https://leetcode.com/problems/linked-list-cycle-ii/" },
      { id: "ll-6", title: "Flattening a Linked List", link: "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1" },
      { id: "ll-7", title: "Merge two sorted Linked Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { id: "ll-8", title: "Remove N-th node from the end of a Linked List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" }
    ]
  },
  {
    slug: "binary-tree",
    name: "Binary Tree",
    accent: "sky",
    questions: [
      { id: "bt-1", title: "Level Order Traversal of a Binary Tree", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
      { id: "bt-2", title: "Maximum depth of a Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
      { id: "bt-3", title: "Calculate the Diameter of a Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/" },
      { id: "bt-4", title: "Check if the Binary Tree is Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/" },
      { id: "bt-5", title: "Lowest Common Ancestor for two given Nodes", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
      { id: "bt-6", title: "Check if two trees are identical", link: "https://leetcode.com/problems/same-tree/" },
      { id: "bt-7", title: "Boundary Traversal of a Binary Tree", link: "https://leetcode.com/problems/boundary-of-binary-tree/#" },
      { id: "bt-8", title: "Zig Zag Traversal Of Binary Tree", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" }
    ]
  },
  {
    slug: "binary-search-tree",
    name: "Binary Search Tree",
    accent: "fuchsia",
    questions: [
      { id: "bst-1", title: "Size of the largest BST in a Binary Tree", link: "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/" },
      { id: "bst-2", title: "Find a pair with a given sum in BST", link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/" },
      { id: "bst-3", title: "Populate Next Right pointers of Tree", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/" },
      { id: "bst-4", title: "Find LCA of two nodes in BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
      { id: "bst-5", title: "Find the inorder predecessor/successor of a given Key in BST.", link: "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1" },
      { id: "bst-6", title: "Kth largest element in Binary Search Tree", link: "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1" }
    ]
  },
  {
    slug: "stack-and-queue",
    name: "Stack and Queue",
    accent: "slate",
    questions: [
      { id: "sq-1", title: "Implement Min Stack : O(2N) and O(N) Space Complexity", link: "https://leetcode.com/problems/min-stack/" },
      { id: "sq-2", title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/" },
      { id: "sq-3", title: "Area of largest rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
      { id: "sq-4", title: "Implement LRU Cache", link: "https://leetcode.com/problems/lru-cache/" },
      { id: "sq-5", title: "Implement Stack using single Queue", link: "https://leetcode.com/problems/implement-stack-using-queues/" },
      { id: "sq-6", title: "Check for Balanced Parentheses", link: "https://leetcode.com/problems/valid-parentheses/" },
      { id: "sq-7", title: "Next Greater Element Using Stack", link: "https://leetcode.com/problems/next-greater-element-ii/description/" }
    ]
  },
  {
    slug: "backtracking",
    name: "Backtracking",
    accent: "amber",
    questions: [
      { id: "back-1", title: "Rat in a Maze", link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1" },
      { id: "back-2", title: "M - Coloring Problem", link: "https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1#" },
      { id: "back-3", title: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/" },
      { id: "back-4", title: "N Queen Problem | Return all Distinct Solutions to the N-Queens Puzzle", link: "https://leetcode.com/problems/n-queens/" },
      { id: "back-5", title: "Print All Permutations of a String/Array", link: "https://leetcode.com/problems/permutations/" },
      { id: "back-6", title: "Word Break (print all ways)", link: "https://bit.ly/3FxgW92" }
    ]
  },
  {
    slug: "graphs",
    name: "Graphs",
    accent: "green",
    questions: [
      { id: "graph-1", title: "Detect Cycle in an Undirected Graph (using BFS)", link: "https://leetcode.com/problems/course-schedule/" },
      { id: "graph-2", title: "Topological Sort (BFS)", link: "https://practice.geeksforgeeks.org/problems/topological-sort/1" },
      { id: "graph-3", title: "Number of Distinct Islands", link: "https://leetcode.com/problems/number-of-islands/" },
      { id: "graph-4", title: "Bipartite Graph", link: "https://leetcode.com/problems/is-graph-bipartite/" },
      { id: "graph-5", title: "Detect a Cycle in Directed Graph | Topological Sort | Kahn's Algorithm", link: "https://leetcode.com/problems/course-schedule/" },
      { id: "graph-6", title: "Print Shortest Path - Dijkstra's Algorithm", link: "https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1" }
    ]
  }
];

module.exports = topics;
