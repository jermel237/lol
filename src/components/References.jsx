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
            <li><a href="https://www.geeksforgeeks.org/sorting-algorithms/" target="_blank" rel="noopener noreferrer">GeeksforGeeks - All Sorting Algorithms</a></li>
          </ul>
        </div>

        <div className="reference-card">
          <h3>Graph Algorithms</h3>
          <ul>
            <li><a href="https://www.w3schools.com/dsa/dsa_theory_graphs.php" target="_blank" rel="noopener noreferrer">W3Schools - Graphs</a></li>
            <li><a href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" target="_blank" rel="noopener noreferrer">GeeksforGeeks - Graph Algorithms</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default References;