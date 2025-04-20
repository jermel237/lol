import React from 'react';

const InsertionSort = () => {
  return (
    <div className="algorithm-section">
      <h3>Insertion Sort</h3>
      <p>
        Insertion Sort builds the final sorted array one item at a time by repeatedly 
        taking the next element and inserting it into the correct position.
      </p>
      
      <h4>How it works:</h4>
      <ol>
        <li>Start with the second element (index 1)</li>
        <li>Compare it with elements before it</li>
        <li>Insert it into the correct position by shifting larger elements right</li>
        <li>Repeat for all elements</li>
      </ol>
      
      <h4>Example Code:</h4>
      <pre>
        {`function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}`}
      </pre>
      
      <h4>Time Complexity:</h4>
      <ul>
        <li>Worst Case: O(n²)</li>
        <li>Average Case: O(n²)</li>
        <li>Best Case: O(n) - when array is already sorted</li>
      </ul>
    </div>
  );
};

export default InsertionSort;