import React, {useState, useEffect} from "react";
import { useFetch } from './useFetch';

export const Hello = () => {
    // const renders = useRef(0);
    // console.log('renders: ', renders.current++);
    const [count, setCount] = useState(() => 
    JSON.parse(localStorage.getItem('count'))
  );
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
  

  //if count changes sets count in local storage
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

    return (
        <div>
            <div>{!data ? "loading..." : data }</div>
            <div>count: {count}</div>
            <button onClick={() => setCount(c => c+1)}>increment</button>
        </div>
    );
};