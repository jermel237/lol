import React from 'react';

const MergeSort = () => {
  return (
    <div className="algorithm-section">
      <h3>Merge Sort</h3>
      <p>
        Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, 
        sorts them recursively, and then merges the two sorted halves.
      </p>
      
      <h4>How it works:</h4>
      <ol>
        <li>Divide the unsorted list into n sublists, each containing one element</li>
        <li>Repeatedly merge sublists to produce new sorted sublists</li>
        <li>Continue until there is only one sublist remaining</li>
      </ol>
      
      <h4>Example Code:</h4>
      <pre>
        {`function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIdx = 0;
  let rightIdx = 0;
  
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  
  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}`}
      </pre>
      
      <h4>Time Complexity:</h4>
      <ul>
        <li>All Cases: O(n log n)</li>
      </ul>
      
      <h4>Space Complexity:</h4>
      <ul>
        <li>O(n) - Requires additional space for merging</li>
      </ul>
    </div>
  );
};

export default MergeSort;