import React, { useState } from "react";

export default function Test() {
    const [color, setColor] = useState("blue");

    const style = {
        "backgroundColor": color
    };

    function changeColor() {
        setColor((prev) => (prev === "blue" ? "red" : "blue"));
    }

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={changeColor} style={style}>
                Click to toggle
            </button>
        </div>
    );
}
