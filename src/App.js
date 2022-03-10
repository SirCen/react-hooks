import React, {useState, useEffect, useRef} from 'react';
import { useFetch } from './useFetch';
import { useForm } from './useForm';
//import { Hello } from './Hello';
//Example expensive initial state
// function expensiveInitState() {
//   return 10;
// }

function App() {
  // useState(() => expensiveInitState()); // will only call expensive state once, saving on computation

  const [values, handleChange] = useForm({email: "", password: "", firstName: ""});
  const [count, setCount] = useState(() => 
    JSON.parse(localStorage.getItem('count'))
  );
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
  const inputRef = useRef();
  //if count changes sets count in local storage
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);
  
  


  return (
    <div>
      <div>{!data ? "loading..." : data }</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c+1)}>increment</button>
      <>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button> */}
      {/* {showHello && <Hello />} */}
      <input ref={inputRef} name='email' value={values.email} onChange={handleChange} />
      <input placeholder="first name" name='firstName' value={values.firstName} onChange={handleChange} />
      <input type='password' name='password' value={values.password} onChange={handleChange} />
      <button onClick={() =>{
        inputRef.current.focus();
      }}>focus</button>
      </>
    </div>
  );
}

export default App;
