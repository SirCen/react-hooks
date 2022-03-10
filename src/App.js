import React, {useReducer} from 'react';


// dispatch acts as a listener to the action type which is then acted on
function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch({type: 'INCREMENT' })}>increment</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>decrement</button>
    </div>
  );
}

export default App;
