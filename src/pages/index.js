import React, {useContext} from "react";
import { UserContext } from '../UserContext';

export function Index() {
    const message = useContext(UserContext);
    return (
        <div>
            <h2>Home</h2>
            <div>{message}</div>
        </div>
    );
}