import React, {useState, useEffect, useRef, useLayoutEffect} from "react";
import { useFetch } from './useFetch';
import { useMeasurements } from './useMeasurements';

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

  
  const [rect, divRef ] = useMeasurements([data]);

    return (
        <div>
            <div style={{display: 'flex'}}>
                <div ref={divRef}>{!data ? "loading..." : data }</div>
            </div>
            <pre>
                {JSON.stringify(rect, null, 2)}
            </pre>
            <div>count: {count}</div>
            <button onClick={() => setCount(c => c+1)}>increment</button>
        </div>
    );
};