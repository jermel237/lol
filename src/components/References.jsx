import React from 'react';

const References = () => {
  return (
    <div className="references-section">
      <h2>References</h2>
      <div className="reference-cards">
        <div className="reference-card">
          <h3>Sorting Algorithms</h3>
          <ul>
            <li><a href="https://www.w3schools.com/dsa/dsa_algo_bubblesort.php" target="_blank" rel="noopener noreferrer">W3Schools - Bubble Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/bubble-sort-algorithm" target="_blank" rel="noopener noreferrer">GeeksforGeeks - Bubble Sort</a></li>
            <li><a href="https://www.programiz.com/dsa/bubble-sort" target="_blank" rel="noopener noreferrer">Programiz - Bubble Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/quick-sort" target="_blank" rel="noopener noreferrer">GeeksforGeeks - Quick Sort</a></li>
            <li><a href="https://www.programiz.com/dsa/quick-sort" target="_blank" rel="noopener noreferrer">Programiz - Quick Sort</a></li>
            {/* Add more sorting algorithm references as needed */}
          </ul>
        </div>

        <div className="reference-card">
          <h3>Graph Algorithms</h3>
          <ul>
            <li><a href="https://www.w3schools.com/dsa/dsa_theory_graphs.php" target="_blank" rel="noopener noreferrer">W3Schools - Graphs</a></li>
            <li><a href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms" target="_blank" rel="noopener noreferrer">GeeksforGeeks - Graphs</a></li>
            <li><a href="https://www.programiz.com/dsa/graph" target="_blank" rel="noopener noreferrer">Programiz - Graphs</a></li>
            <li><a href="https://www.geeksforgeeks.org/graph-traversals-dfs-and-bfs" target="_blank" rel="noopener noreferrer">GeeksforGeeks - Graph Traversal</a></li>
            {/* Add more graph algorithm references as needed */}
          </ul>
        </div>

        <div className="reference-card">
          <h3>General Resources</h3>
          <ul>
            <li><a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">W3Schools</a></li>
            <li><a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a></li>
            <li><a href="https://www.programiz.com" target="_blank" rel="noopener noreferrer">Programiz</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default References;