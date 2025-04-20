import React from 'react';

const GraphsCycleDetection = () => {
  return (
    <div className="algorithm-section">
      <h3>Graph Cycle Detection</h3>
      <p>
        Detecting cycles in graphs is important for many applications like deadlock detection.
      </p>
      
      <h4>1. Undirected Graph (using DFS):</h4>
      <pre>
        {`function hasCycleUndirected(graph) {
  const visited = new Set();
  
  for (const node in graph) {
    if (!visited.has(node)) {
      if (dfsUndirected(graph, node, visited, null)) {
        return true;
      }
    }
  }
  return false;
}

function dfsUndirected(graph, node, visited, parent) {
  visited.add(node);
  
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      if (dfsUndirected(graph, neighbor, visited, node)) {
        return true;
      }
    } else if (neighbor !== parent) {
      return true;
    }
  }
  return false;
}`}
      </pre>
      
      <h4>2. Directed Graph (using DFS with recursion stack):</h4>
      <pre>
        {`function hasCycleDirected(graph) {
  const visited = new Set();
  const recStack = new Set();
  
  for (const node in graph) {
    if (!visited.has(node)) {
      if (dfsDirected(graph, node, visited, recStack)) {
        return true;
      }
    }
  }
  return false;
}

function dfsDirected(graph, node, visited, recStack) {
  visited.add(node);
  recStack.add(node);
  
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      if (dfsDirected(graph, neighbor, visited, recStack)) {
        return true;
      }
    } else if (recStack.has(neighbor)) {
      return true;
    }
  }
  
  recStack.delete(node);
  return false;
}`}
      </pre>
      
      <h4>Applications:</h4>
      <ul>
        <li>Deadlock detection in operating systems</li>
        <li>Dependency resolution in build systems</li>
        <li>Checking validity of DAGs (Directed Acyclic Graphs)</li>
      </ul>
    </div>
  );
};

export default GraphsCycleDetection;