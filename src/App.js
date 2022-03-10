import React, {useState} from 'react';

//Example expensive initial state
// function expensiveInitState() {
//   return 10;
// }

function App() {
  // useState(() => expensiveInitState()); // will only call expensive state once, saving on computation

  const [count, setCount] = useState(10);


  return (
    <div>
      <button onClick={() => setCount(currentCount => currentCount+1)}>+</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
