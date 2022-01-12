import React from "react";
import "./MyFirstComponent.css"

function CreateElement(){
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {className:"some"}, "Sagar"),
        React.createElement("h1", {className:"some"}, "sagar@gmail.com"),
        React.createElement("h1", {className:"some"}, "132456789")
    );
}

export default CreateElement;