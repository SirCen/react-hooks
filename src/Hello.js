import React from "react";

export const Hello = () => {
    React.useEffect(() => {
        console.log("render");

        //cleanup function, returned
        return () => {
        console.log("unmount");
        };

    }, []);

    return <div>Hello</div>;
};