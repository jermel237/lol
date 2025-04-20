import React from 'react';

const QuickSort = () => {
  return (
    <div className="algorithm-section">
      <h3>Quick Sort</h3>
      <p>
        Quick Sort is a divide-and-conquer algorithm that selects a 'pivot' element 
        and partitions the array around the pivot.
      </p>
      
      <h4>How it works:</h4>
      <ol>
        <li>Choose a pivot element</li>
        <li>Partition the array into elements less than and greater than the pivot</li>
        <li>Recursively sort the sub-arrays</li>
      </ol>
      
      <h4>Example Code:</h4>
      <pre>
        {`function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;
  
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}`}
      </pre>
      
      <h4>Time Complexity:</h4>
      <ul>
        <li>Worst Case: O(n²) - when bad pivot is chosen</li>
        <li>Average Case: O(n log n)</li>
        <li>Best Case: O(n log n)</li>
      </ul>
    </div>
  );
};

export default QuickSort;