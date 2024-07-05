import React, { useState } from 'react';
import Header from './Memo/components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default App;
