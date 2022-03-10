import React, {useState} from 'react';

//Example expensive initial state
// function expensiveInitState() {
//   return 10;
// }

function App() {
  // useState(() => expensiveInitState()); // will only call expensive state once, saving on computation

  const [{count, count2}, setCount] = useState({count:10, count2: 20});

//currently does not do merging of states so count2 will disappear
  return (
    <div>
      <button onClick={() => 
        setCount(currentState => ({
          ...currentState, 
          count: currentState.count+1
        }))
      }>
        +
      </button>
      <div>count1: {count}</div>
      <div>count2: {count2}</div>
    </div>
  );
}

export default App;
