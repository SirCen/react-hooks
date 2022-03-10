import React, {useState, useCallback} from 'react';
import { Hello } from './Hello';

function App() {

  const [count, setCount] = useState(0);
  // useful when needing to prevent functions from changing value such as when using memo
  //can pass in parameters
  const increment = useCallback(() => {
    setCount(c => c+1);
  }, [setCount]);

  return (
    <div>
      <Hello increment={increment}/>
      <div>count: {count}</div>
    </div>
  );
}

export default App;
