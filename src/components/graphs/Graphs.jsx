import React from 'react';

const Graphs = () => {
  return (
    <div className="algorithm-section">
      <h3>Graphs</h3>
      <p>
        A Graph is a non-linear data structure consisting of nodes (vertices) and edges.
      </p>
      
      <h4>Graph Terminology:</h4>
      <ul>
        <li><strong>Vertex (Node):</strong> Fundamental unit of the graph</li>
        <li><strong>Edge:</strong> Connection between two vertices</li>
        <li><strong>Directed Graph:</strong> Edges have direction</li>
        <li><strong>Undirected Graph:</strong> Edges have no direction</li>
        <li><strong>Weighted Graph:</strong> Edges have weights</li>
        <li><strong>Path:</strong> Sequence of vertices connected by edges</li>
        <li><strong>Cycle:</strong> Path that starts and ends at the same vertex</li>
      </ul>
      
      <h4>Common Graph Representations:</h4>
      <ol>
        <li>Adjacency Matrix</li>
        <li>Adjacency List</li>
      </ol>
      
      <h4>Graph Applications:</h4>
      <ul>
        <li>Social networks</li>
        <li>Routing algorithms</li>
        <li>Recommendation systems</li>
        <li>Computer networks</li>
      </ul>
    </div>
  );
};

export default Graphs;
