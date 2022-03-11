import React, {useContext} from "react";
import { UserContext } from '../UserContext';

export function Index() {
    const {value, setValue} = useContext(UserContext);
    return (
        <div>
            <h2>Home</h2>
            <div>{value}</div>
            <button onClick={() => setValue("bye from context")}>change context value</button>
        </div>
    );
}