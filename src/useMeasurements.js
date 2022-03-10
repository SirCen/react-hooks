import { useState, useLayoutEffect, useRef } from 'react';

export const useMeasurements = (dependencies) => {
    const [rect, setRect] = useState({});
    const myRef = useRef();
    useLayoutEffect(() => {
        setRect(myRef.current.getBoundingClientRect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
  
    return [rect, myRef];
};