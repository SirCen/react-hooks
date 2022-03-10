import {useEffect, useState} from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({data:null, loading:true});
    useEffect(() => {
        setState(state => ({data: state.data, loading: true}));
        fetch(url).then(x => x.text()).then(y => {
            setState({data: y, loading: false});
        });
    }, [url, setState]);
    //ensure dependency is not changing based on what the useEffect calls or can get stuck in loop

    return state;
};