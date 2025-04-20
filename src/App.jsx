import React from 'react';
import './styles.css';

// Import your algorithm components...
import BubbleSort from './components/algorithms/BubbleSort';
// ... other imports ...

// Import the References component
import References from './components/References';

const App = () => {
  return (
    <div className="learning-website">
      <header>
        <h1>Algorithm Learning Hub</h1>
      </header>
      
      <main>
        {/* Your existing algorithm sections... */}
        <div className="content-section">
          <h2>Sorting Algorithms</h2>
          <BubbleSort />
          {/* Other sorting components... */}
        </div>
        
        <div className="content-section">
          <h2>Graph Algorithms</h2>
          {/* Graph components... */}
        </div>

        {/* Add the References component at the bottom */}
        <References />
      </main>
      
      <footer>
        <p>© {new Date().getFullYear()} Algorithm Learning Hub</p>
      </footer>
    </div>
  );
};

export default App;