import React from "react";
import { createRoot } from "react-dom/client";

const heading = () => {
    return(
        <div id="heading">
            Hello Vijay
        </div>
    )
}
const root = createRoot(document.getElementById("root"))
root.render(heading)