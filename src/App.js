import React, {useState, useEffect} from 'react';
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
  //if count changes sets count in local storage
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);
  //const [showHello, setShowHello] = useState(true);
  //runs everytime the page is rendered
  //second param is dependency array of values, if they change the effect is fired again
  //if second param is empty [], then doesnt change the effect
  //can have more than one useEffect in component and fire in order
  //http://numbersapi.com/43/trivia
  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener('mousemove', onMouseMove);
  //   //cleanup function, returned
  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //   }

  // }, []);

  // useEffect(() => {
  //   console.log('mount1');
  // }, []);

  // useEffect(() => {
  //   console.log('mount2');
  // }, []);
  

  return (
    <div>
      <div>{!data ? "loading..." : data }</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c+1)}>increment</button>
      <>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button> */}
      {/* {showHello && <Hello />} */}
      <input name='email' value={values.email} onChange={handleChange} />
      <input placeholder="first name" name='firstName' value={values.firstName} onChange={handleChange} />
      <input type='password' name='password' value={values.password} onChange={handleChange} />
      </>
    </div>
  );
}

export default App;
