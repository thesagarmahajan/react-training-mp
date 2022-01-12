import React from "react";


function CreateElementTableExample() {
    return React.createElement("table", { border: "1" },
        React.createElement("thead", {},
            React.createElement("tr", {},
                React.createElement("th", {}, "Column1"),
                React.createElement("th", {}, "Column2"),
                React.createElement("th", {}, "Column3"),
                React.createElement("th", {}, "Column4")
            )
        ),
        React.createElement("tbody", {},
            React.createElement("tr", {},
                React.createElement("td", {}, "1"),
                React.createElement("td", {}, "2"),
                React.createElement("td", {}, "3"),
                React.createElement("td", {}, "4")
            ),
            React.createElement("tr", {},
                React.createElement("td", {}, "5"),
                React.createElement("td", {}, "6"),
                React.createElement("td", {}, "7"),
                React.createElement("td", {}, "8")
            )
        )
    );
}

export default CreateElementTableExample;