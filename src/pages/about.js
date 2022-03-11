import React, {useContext} from "react";
import { UserContext } from "../UserContext";

export function About() {
    const message = useContext(UserContext);
    return (
        <div>
            <h2>About</h2>
            <div>{message}</div>
        </div>
    );
}