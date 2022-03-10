import React, {useReducer, useState} from 'react';


// dispatch acts as a listener to the action type which is then acted on
// all logic in here
// useState is good, but once gets more complex, 
// useReducer is better to change multiple things in the state based on actions 
function reducer(state, action) {
  switch(action.type) {
    case 'add-todo':
      return {
        todos:[...state.todos, {payload: action.payload, completed: false}], 
        todoCount: state.todoCount + 1
      };
    case 'toggle-todo':
      return {
        todos: state.todos.map((t, idx) => 
          idx === action.idx ? {...t, completed: !t.completed} : t
        ),
        todoCount: state.todoCount 
      };
    default:
      return state;
  }
}

function App() {

  const [{todos, todoCount}, dispatch] = useReducer(reducer, {todos: [], todoCount: 0});
  const [text, setText] = useState();
  
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch({type: 'add-todo', payload:text});
        setText("");
      }}>
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      <div>number of todos: {todoCount}</div>
      {todos.map((t, idx) => (
        <div 
          key={t.payload} 
          onClick={() => dispatch({type: 'toggle-todo', idx})} 
          style={{textDecoration: t.completed ?  'line-through' : ""}}
        >
          {t.payload}
        </div>
      ))}
    </div>
  );
}

export default App;
