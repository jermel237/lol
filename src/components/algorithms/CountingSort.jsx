import React from 'react';

const CountingSort = () => {
  return (
    <div className="algorithm-section">
      <h3>Counting Sort</h3>
      <p>
        Counting Sort is a non-comparison based sorting algorithm that works by counting 
        the number of objects having distinct key values.
      </p>
      
      <h4>How it works:</h4>
      <ol>
        <li>Find the maximum element in the array</li>
        <li>Initialize a count array with size max+1</li>
        <li>Store the count of each element at their index</li>
        <li>Modify the count array to store cumulative sums</li>
        <li>Build the output array using the count array</li>
      </ol>
      
      <h4>Example Code:</h4>
      <pre>
        {`function countingSort(arr) {
  const max = Math.max(...arr);
  const count = Array(max + 1).fill(0);
  const output = Array(arr.length);
  
  // Store count of each element
  for (const num of arr) {
    count[num]++;
  }
  
  // Change count[i] to cumulative count
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  
  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  
  return output;
}`}
      </pre>
      
      <h4>Time Complexity:</h4>
      <ul>
        <li>All Cases: O(n + k) where k is the range of input</li>
      </ul>
      
      <h4>Limitations:</h4>
      <ul>
        <li>Only works for integer data</li>
        <li>Inefficient when range (k) is significantly larger than number of elements</li>
      </ul>
    </div>
  );
};

export default CountingSort;