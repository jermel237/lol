import React from 'react';
import './styles.css';

// Keep all your existing imports
import BubbleSort from './components/algorithms/BubbleSort';
import SelectionSort from './components/algorithms/SelectionSort';
import InsertionSort from './components/algorithms/InsertionSort';
import QuickSort from './components/algorithms/QuickSort';
import CountingSort from './components/algorithms/CountingSort';
import RadixSort from './components/algorithms/RadixSort';
import MergeSort from './components/algorithms/MergeSort';
import Graphs from './components/graphs/Graphs';
import GraphsImplementation from './components/graphs/GraphsImplementation';
import GraphsTraversal from './components/graphs/GraphsTraversal';
import GraphsCycleDetection from './components/graphs/GraphsCycleDetection';

// Add this new import
import References from './components/References';

const App = () => {
  return (
    <div className="learning-website">
      <header>
        <h1>Algorithm Learning Hub</h1>
      </header>
      
      <main>
        {/* Keep all existing content exactly as is */}
        <div className="content-section">
          <h2>Sorting Algorithms</h2>
          <BubbleSort />
          <SelectionSort />
          <InsertionSort />
          <QuickSort />
          <CountingSort />
          <RadixSort />
          <MergeSort />
        </div>
        
        <div className="content-section">
          <h2>Graph Algorithms</h2>
          <Graphs />
          <GraphsImplementation />
          <GraphsTraversal />
          <GraphsCycleDetection />
        </div>

        {/* Add References at the bottom */}
        <References />
      </main>
      
      <footer>
        <p>© {new Date().getFullYear()} Algorithm Learning Hub</p>
      </footer>
    </div>
  );
};

export default App;
