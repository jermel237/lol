import React from 'react';

const SelectionSort = () => {
  return (
    <div className="algorithm-section">
      <h3>Selection Sort</h3>
      <p>
        Selection Sort works by repeatedly finding the minimum element from the unsorted part 
        and putting it at the beginning.
      </p>
      
      <h4>How it works:</h4>
      <ol>
        <li>Find the minimum element in the unsorted array</li>
        <li>Swap it with the first unsorted element</li>
        <li>Repeat for the remaining unsorted portion</li>
      </ol>
      
      <h4>Example Code:</h4>
      <pre>
        {`function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n-1; i++) {
    let minIdx = i;
    for (let j = i+1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    // Swap the found minimum element with the first element
    let temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
  return arr;
}`}
      </pre>
      
      <h4>Time Complexity:</h4>
      <ul>
        <li>All Cases: O(n²)</li>
      </ul>
    </div>
  );
};

export default SelectionSort;
