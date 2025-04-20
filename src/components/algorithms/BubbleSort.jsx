import React from 'react';

const BubbleSort = () => {
  return (
    <div className="algorithm-section">
      <h3>Bubble Sort</h3>
      <p>
        Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping 
        the adjacent elements if they are in the wrong order.
      </p>
      
      <h4>How it works:</h4>
      <ol>
        <li>Compare adjacent elements</li>
        <li>Swap if they are in the wrong order</li>
        <li>Repeat until no swaps are needed</li>
      </ol>
      
      <h4>Example Code:</h4>
      <pre>
        {`function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
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

export default BubbleSort;
