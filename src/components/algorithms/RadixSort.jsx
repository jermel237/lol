import React from 'react';

const RadixSort = () => {
  return (
    <div className="algorithm-section">
      <h3>Radix Sort</h3>
      <p>
        Radix Sort is a non-comparison based sorting algorithm that sorts numbers by 
        processing individual digits.
      </p>
      
      <h4>How it works:</h4>
      <ol>
        <li>Find the maximum number to know number of digits</li>
        <li>Do counting sort for every digit (from least to most significant)</li>
        <li>After each pass, numbers are sorted according to the current digit</li>
      </ol>
      
      <h4>Example Code:</h4>
      <pre>
        {`function radixSort(arr) {
  const max = Math.max(...arr);
  
  // Do counting sort for every digit
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortByDigit(arr, exp);
  }
  return arr;
}

function countingSortByDigit(arr, exp) {
  const count = Array(10).fill(0);
  const output = Array(arr.length);
  
  // Store count of occurrences
  for (const num of arr) {
    const digit = Math.floor(num / exp) % 10;
    count[digit]++;
  }
  
  // Change count[i] to cumulative count
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  
  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  
  // Copy the output array to arr[]
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}`}
      </pre>
      
      <h4>Time Complexity:</h4>
      <ul>
        <li>All Cases: O(d*(n + b)) where d is number of digits, b is base (10)</li>
      </ul>
      
      <h4>When to use:</h4>
      <ul>
        <li>When numbers have many digits but range is limited</li>
        <li>For fixed-length integer sorting</li>
      </ul>
    </div>
  );
};

export default RadixSort;
