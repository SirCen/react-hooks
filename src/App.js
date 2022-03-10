import React, {useState, useEffect} from 'react';
import { useForm } from './useForm';
//import { Hello } from './Hello';
//Example expensive initial state
// function expensiveInitState() {
//   return 10;
// }

function App() {
  // useState(() => expensiveInitState()); // will only call expensive state once, saving on computation

  const [values, handleChange] = useForm({email: "", password: "", firstName: ""});
  
  //const [showHello, setShowHello] = useState(true);
  //runs everytime the page is rendered
  //second param is dependency array of values, if they change the effect is fired again
  //if second param is empty [], then doesnt change the effect
  //can have more than one useEffect in component and fire in order
  useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    };
    window.addEventListener('mousemove', onMouseMove);
    //cleanup function, returned
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }

  }, []);

  return (
    <div>
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
