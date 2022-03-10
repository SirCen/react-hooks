import React from "react";
import {useCountRenders} from "./useCountRenders";
//memo compares props, if changed: rerender component
export const Hello = React.memo(({increment}) => {
    useCountRenders();
    return <button onClick={increment}>hello</button>
});