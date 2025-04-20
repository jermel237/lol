import React from 'react';

const GraphsTraversal = () => {
  return (
    <div className="algorithm-section">
      <h3>Graph Traversal</h3>
      <p>
        Graph traversal refers to the process of visiting all vertices in a graph.
      </p>
      
      <h4>1. Breadth-First Search (BFS):</h4>
      <p>Explores all neighbors at the present depth before moving to next level.</p>
      <pre>
        {`function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];
  visited.add(startNode);
  
  while (queue.length) {
    const current = queue.shift();
    console.log(current); // Process node
    
    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`}
      </pre>
      
      <h4>2. Depth-First Search (DFS):</h4>
      <p>Explores as far as possible along each branch before backtracking.</p>
      <pre>
        {`// Recursive DFS
function dfs(graph, node, visited = new Set()) {
  visited.add(node);
  console.log(node); // Process node
  
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Iterative DFS
function dfsIterative(graph, startNode) {
  const visited = new Set();
  const stack = [startNode];
  
  while (stack.length) {
    const current = stack.pop();
    if (!visited.has(current)) {
      console.log(current); // Process node
      visited.add(current);
      
      // Push neighbors in reverse order to visit left-to-right
      for (let i = graph[current].length - 1; i >= 0; i--) {
        stack.push(graph[current][i]);
      }
    }
  }
}`}
      </pre>
      
      <h4>Applications:</h4>
      <ul>
        <li>BFS: Shortest path in unweighted graph, web crawling</li>
        <li>DFS: Topological sorting, solving puzzles, path finding</li>
      </ul>
    </div>
  );
};

export default GraphsTraversal;