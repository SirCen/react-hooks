import React, {useState} from 'react';
import { useForm } from './useForm';

//Example expensive initial state
// function expensiveInitState() {
//   return 10;
// }

function App() {
  // useState(() => expensiveInitState()); // will only call expensive state once, saving on computation

  const [values, handleChange] = useForm({email: "", password: ""});

  return (
    <div>
      <input name='email' value={values.email} onChange={handleChange} />
      <input type='password' name='password' value={values.password} onChange={handleChange} />
    </div>
  );
}

export default App;
