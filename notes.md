https://medium.com/pythoneers/7-must-know-algorithms-for-your-next-coding-interview-26252748b895

Arrays
Linked Lists
Stacks
Queues
Trees
Graphs
Hash Tables/Sets

DFS stands for Depth First Search. It is one of the most asked algorithms in coding interviews. Interviewers love asking questions based on trees and graphs and DFS is the algorithm to solve them. DFS goes deep into a path and then returns all the way back to the root. While….

BFS stands for Breadth-First Search. It goes broad and is used to solve problems like level-order traversal of a tree or to find the shortest distance between nodes in a graph

DFS: https://leetcode.com/problems/number-of-islands/

BFS: https://leetcode.com/problems/binary-tree-level-order-traversal/

Binary search: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

recursion: https://leetcode.com/problems/merge-two-sorted-lists/

https://leetcode.com/problems/edit-distance/

https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/

DFS starts at the root node (or a different node for a graph) and traversals each branch before returning

When traversing a tree passing a callback that is excuted when visiting the node is known as the visitor pattern

In-order traversal: Visits all nodes from smallest to largest in ascending order
Pre-order traversal: visits the node first, then left node, and finally right node
Post-order traversal: visits left node, then right node, and then finally the node
Base case: node key is null

Minimum value is found by traversing the left most nodes until the end where the smallest value resides
Maximum value is found by traversing the right most nodes until the end where the largest value resides

Graph Terminology: 
    (Examples: social networks, roads, communication)
    
    ## Nodes (also called Vertices) connected to one another by edges
    ## Adjacent vertices are connected by an edge, i.e. a direct connection
    ## Degree of vertices is the number of adjacent vertices, regardless of direction
    ## Paths are sequential connected vertices
    ## Simple paths do not contain repeated vertices
    ## Cyles are simple paths where the last vertex is the same as the first one
    ## Graphs can be directed which means the edges specify a direction
    ## Strongly connected graphs are bi-directional
    ## Graphs can be weighted
    
Graph Traversal
    
    ## Depth First: Uses a stack where the vertices are placed into it where adjacent vertex are visited if they exist.

    ## Breadth First: Uses a queue where the older unexplored vertices are explored first.