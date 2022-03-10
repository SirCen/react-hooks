import React, {useState} from 'react';

//Example expensive initial state
// function expensiveInitState() {
//   return 10;
// }

function App() {
  // useState(() => expensiveInitState()); // will only call expensive state once, saving on computation

  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);

//currently does not do merging of states so count2 will disappear
  return (
    <div>
      <button onClick={() => {
        setCount(c => c+1);
        setCount2(c => c+1);
      }}>
        +
      </button>
      <div>count1: {count}</div>
      <div>count2: {count2}</div>
    </div>
  );
}

export default App;
