import React, {useState, useMemo, useCallback} from 'react';
import { useFetch } from './useFetch';

function App() {

  const [count, setCount] = useState(0);
  const {data} = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json");
  
  //this will fire this function every render
  // with useCallback only fires once or when data is changed
  //if no dependencies in useCallback, better to place as function outside
  const computeLongestWord = useCallback((arr) => {
    if (!arr) {
      return [];
    }
    console.log('computing longest word');
    let longestWord = '';
    JSON.parse(arr).forEach(sentence => sentence.split(' ').forEach(word => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }) 
    );
    return longestWord;
  }, []);

  const longestWord = useMemo(() => computeLongestWord(data), [computeLongestWord, data]);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count+1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
}

export default App;
