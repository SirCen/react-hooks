import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
//import { useFetch } from './useFetch';
import { useForm } from './useForm';
import { Hello } from './Hello';
//Example expensive initial state
// function expensiveInitState() {
//   return 10;
// }

function App() {
  // useState(() => expensiveInitState()); // will only call expensive state once, saving on computation

  const [values, handleChange] = useForm({email: "", password: "", firstName: ""});
  

  const [showHello, setShowHello] = useState(true);
  
  const inputRef = useRef();
  const hello = useRef(() => {console.log('Hello');});
  // fires synchronously after all DOM mutations
  //good for getting measurements of DOM components after render
  // dont use unless useEffect does not work
  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect());
  // }, []);

  return (
    <div>
      <>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <input ref={inputRef} name='email' value={values.email} onChange={handleChange} />
      <input placeholder="first name" name='firstName' value={values.firstName} onChange={handleChange} />
      <input type='password' name='password' value={values.password} onChange={handleChange} />
      <button onClick={() =>{
        inputRef.current.focus();
        hello.current();
      }}>focus</button>
      </>
    </div>
  );
}

export default App;
