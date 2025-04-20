import React from 'react';

const GraphsImplementation = () => {
  return (
    <div className="algorithm-section">
      <h3>Graph Implementation</h3>
      <p>
        Graphs can be implemented using either adjacency matrix or adjacency list.
      </p>
      
      <h4>1. Adjacency Matrix Implementation:</h4>
      <pre>
        {`class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjMatrix = Array(numVertices).fill().map(() => Array(numVertices).fill(0));
  }
  
  addEdge(v, w) {
    this.adjMatrix[v][w] = 1;
    this.adjMatrix[w][v] = 1; // For undirected graph
  }
  
  removeEdge(v, w) {
    this.adjMatrix[v][w] = 0;
    this.adjMatrix[w][v] = 0; // For undirected graph
  }
}`}
      </pre>
      
      <h4>2. Adjacency List Implementation:</h4>
      <pre>
        {`class Graph {
  constructor() {
    this.adjList = new Map();
  }
  
  addVertex(v) {
    this.adjList.set(v, []);
  }
  
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // For undirected graph
  }
  
  removeEdge(v, w) {
    let vEdges = this.adjList.get(v);
    let wEdges = this.adjList.get(w);
    this.adjList.set(v, vEdges.filter(vertex => vertex !== w));
    this.adjList.set(w, wEdges.filter(vertex => vertex !== v));
  }
}`}
      </pre>
      
      <h4>Comparison:</h4>
      <ul>
        <li><strong>Adjacency Matrix:</strong> 
          <br/>- Faster for edge lookups (O(1))
          <br/>- Uses more space (O(V²))
        </li>
        <li><strong>Adjacency List:</strong>
          <br/>- More space efficient (O(V+E))
          <br/>- Slower for edge lookups (O(V))
        </li>
      </ul>
    </div>
  );
};

export default GraphsImplementation;