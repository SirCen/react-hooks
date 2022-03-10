import React, {useState, useCallback} from 'react';
import { Hello } from './Hello';
import { Square } from './Square';

function App() {

  const [count, setCount] = useState(0);
  const favNums = [13, 42, 69];
  // useful when needing to prevent functions from changing value such as when using memo
  //can pass in parameters
  const increment = useCallback((n) => {
    setCount(c => c+n);
  }, [setCount]);

  return (
    <div>
      <Hello increment={increment}/>
      <div>count: {count}</div>
      {favNums.map(n => {
        return (
          <Square increment={increment} n={n} key={n} />
        );
      })}
    </div>
  );
}

export default App;
